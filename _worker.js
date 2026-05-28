
const DEFAULT_CONTACT_EMAIL = "contato@negociamais.app";
const DEFAULT_FROM_EMAIL = "site@negociamais.app";
const DEFAULT_TURNSTILE_ACTION = "site_contact";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}

function normalizeString(value = "") {
  return String(value || "").trim();
}

function escapeHtml(value = "") {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isEmail(value = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeString(value));
}

function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
      "Cache-Control": "no-store",
    },
  });
}

function getClientIp(request) {
  return normalizeString(request.headers.get("CF-Connecting-IP")) || undefined;
}

function getExpectedTurnstileAction(env) {
  return normalizeString(env.TURNSTILE_EXPECTED_ACTION || DEFAULT_TURNSTILE_ACTION);
}

function getExpectedHostname(request, env) {
  return normalizeString(env.TURNSTILE_EXPECTED_HOSTNAME || new URL(request.url).hostname).toLowerCase();
}

async function validateTurnstileToken({ token, request, env }) {
  const secret = normalizeString(env.TURNSTILE_SECRET_KEY);
  if (!secret) {
    return { ok: false, status: 503, message: "A variável TURNSTILE_SECRET_KEY ainda não foi configurada no Cloudflare Pages." };
  }
  const responseToken = normalizeString(token);
  if (!responseToken) {
    return { ok: false, status: 400, message: "Confirme a verificação anti-robô antes de enviar sua mensagem." };
  }

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", responseToken);
  const remoteip = getClientIp(request);
  if (remoteip) form.append("remoteip", remoteip);

  let verificationResponse;
  try {
    verificationResponse = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body: form });
  } catch {
    return { ok: false, status: 502, message: "Não foi possível validar a proteção anti-robô neste momento." };
  }

  const verificationData = await verificationResponse.json().catch(() => ({}));
  if (!verificationResponse.ok || !verificationData?.success) {
    return { ok: false, status: 403, message: "A validação anti-robô falhou. Refaça a verificação.", details: verificationData };
  }

  const expectedAction = getExpectedTurnstileAction(env);
  if (expectedAction && verificationData.action && verificationData.action !== expectedAction) {
    return { ok: false, status: 403, message: "A proteção anti-robô retornou uma ação incompatível.", details: verificationData };
  }

  const expectedHostname = getExpectedHostname(request, env);
  const verifiedHostname = normalizeString(verificationData.hostname).toLowerCase();
  if (expectedHostname && verifiedHostname && verifiedHostname !== expectedHostname) {
    return { ok: false, status: 403, message: "A proteção anti-robô retornou um hostname incompatível.", details: verificationData };
  }

  return { ok: true, details: verificationData };
}

function handleConfig(request, env) {
  if (request.method === "OPTIONS") return handleOptions();
  if (request.method !== "GET") return json({ error: "Método não permitido." }, 405, { Allow: "GET, OPTIONS" });
  const turnstileSiteKey = normalizeString(env.TURNSTILE_SITE_KEY);
  if (!turnstileSiteKey) {
    return json({ error: "A variável TURNSTILE_SITE_KEY ainda não foi configurada no Cloudflare Pages." }, 503);
  }
  return json({
    turnstileSiteKey,
    turnstileAction: getExpectedTurnstileAction(env),
  });
}

async function parsePayload(request) {
  const formData = await request.formData();
  const file = formData.get("cliente_comprovante");
  return { formData, file };
}

async function prepareAttachment(file) {
  if (!(file && typeof file.arrayBuffer === "function" && file.size)) return { attachment: null, note: "" };
  const maxSize = 4 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error("O comprovante excede o limite de 4 MB. Reduza o arquivo e tente novamente.");
  }
  const buffer = await file.arrayBuffer();
  const base64Content = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return {
    attachment: {
      filename: normalizeString(file.name) || "comprovante",
      content: base64Content,
      type: normalizeString(file.type) || "application/octet-stream",
    },
    note: "Comprovante anexado no envio."
  };
}

function buildEmailHtml(payload, attachmentNote = "") {
  const commonRows = [
    ["Perfil", payload.perfil],
    ["Telefone", payload.telefone],
    ["E-mail", payload.email],
  ];

  const companyRows = [
    ["Empresa", payload.empresa_nome],
    ["Responsável", payload.empresa_responsavel],
    ["Data sugerida", payload.agenda_data],
    ["Hora sugerida", payload.agenda_hora],
  ];

  const clientRows = [
    ["Nome", payload.cliente_nome],
    ["CPF", payload.cliente_cpf],
    ["Assunto", payload.cliente_assunto],
    ["Credor", payload.cliente_credor],
    ["Valor da dívida", payload.cliente_valor_divida],
  ];

  const rows = [...commonRows, ...(payload.perfil === "empresa" ? companyRows : clientRows)]
    .filter(([, value]) => normalizeString(value) !== "")
    .map(([label, value]) => `<tr><td style="padding:10px 12px;border:1px solid #d9e2ec;font-weight:700;background:#f8fbfd;">${escapeHtml(label)}</td><td style="padding:10px 12px;border:1px solid #d9e2ec;">${escapeHtml(value)}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#102a43;max-width:760px;margin:0 auto;">
      <h2 style="margin:0 0 16px;color:#1B2A4E;">Novo contato pelo site Negocia Mais</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:18px;">${rows}</table>
      <div style="padding:16px 18px;border-radius:14px;border:1px solid #d9e2ec;background:#fff;">
        <strong style="display:block;margin-bottom:10px;color:#1B2A4E;">Mensagem</strong>
        <div style="white-space:pre-wrap;line-height:1.7;">${escapeHtml(payload.mensagem)}</div>
      </div>
      ${attachmentNote ? `<p style="margin-top:14px;color:#486581;">${escapeHtml(attachmentNote)}</p>` : ""}
    </div>
  `;
}

async function handleContact(request, env) {
  if (request.method === "OPTIONS") return handleOptions();
  if (request.method !== "POST") return json({ error: "Método não permitido." }, 405, { Allow: "POST, OPTIONS" });

  const { formData, file } = await parsePayload(request);
  const payload = {
    perfil: normalizeString(formData.get("perfil") || "empresa").toLowerCase(),
    website: normalizeString(formData.get("website")),
    turnstileToken: normalizeString(formData.get("cf-turnstile-response")),
    empresa_nome: normalizeString(formData.get("empresa_nome")),
    empresa_responsavel: normalizeString(formData.get("empresa_responsavel")),
    empresa_email: normalizeString(formData.get("empresa_email")),
    empresa_telefone: normalizeString(formData.get("empresa_telefone")),
    agenda_data: normalizeString(formData.get("agenda_data")),
    agenda_hora: normalizeString(formData.get("agenda_hora")),
    empresa_mensagem: normalizeString(formData.get("empresa_mensagem")),
    cliente_nome: normalizeString(formData.get("cliente_nome")),
    cliente_cpf: normalizeString(formData.get("cliente_cpf")),
    cliente_email: normalizeString(formData.get("cliente_email")),
    cliente_telefone: normalizeString(formData.get("cliente_telefone")),
    cliente_assunto: normalizeString(formData.get("cliente_assunto")),
    cliente_credor: normalizeString(formData.get("cliente_credor")),
    cliente_valor_divida: normalizeString(formData.get("cliente_valor_divida")),
    cliente_mensagem: normalizeString(formData.get("cliente_mensagem")),
  };

  if (payload.website) return json({ message: "Solicitação recebida." });

  payload.perfil = payload.perfil === "cliente" ? "cliente" : "empresa";
  payload.email = payload.perfil === "empresa" ? payload.empresa_email : payload.cliente_email;
  payload.telefone = payload.perfil === "empresa" ? payload.empresa_telefone : payload.cliente_telefone;
  payload.mensagem = payload.perfil === "empresa" ? payload.empresa_mensagem : payload.cliente_mensagem;

  if (payload.perfil === "empresa") {
    if (!payload.empresa_nome || !payload.empresa_responsavel || !isEmail(payload.email) || !payload.telefone || !payload.mensagem) {
      return json({ error: "Preencha nome da empresa, responsável, e-mail válido, telefone e contexto da empresa." }, 400);
    }
  } else {
    if (!payload.cliente_nome || !payload.cliente_cpf || !isEmail(payload.email) || !payload.telefone || !payload.cliente_assunto || !payload.mensagem) {
      return json({ error: "Preencha nome, CPF, e-mail válido, telefone, assunto e sua mensagem." }, 400);
    }
    if (payload.cliente_assunto === "nao-tenho-divida" && !payload.cliente_credor) {
      return json({ error: "Informe o credor relacionado para o assunto 'Não tenho dívida'." }, 400);
    }
  }

  const turnstileValidation = await validateTurnstileToken({ token: payload.turnstileToken, request, env });
  if (!turnstileValidation.ok) return json({ error: turnstileValidation.message }, turnstileValidation.status);

  const resendApiKey = normalizeString(env.RESEND_API_KEY);
  const contactEmail = normalizeString(env.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL);
  const fromEmail = normalizeString(env.FROM_EMAIL || DEFAULT_FROM_EMAIL);
  if (!resendApiKey) {
    return json({ error: "O formulário está pronto, mas falta configurar a variável RESEND_API_KEY no Cloudflare Pages." }, 503);
  }

  let attachment = null;
  let attachmentNote = "";
  try {
    const prepared = await prepareAttachment(file);
    attachment = prepared.attachment;
    attachmentNote = prepared.note;
  } catch (error) {
    return json({ error: error.message || "Falha ao processar o comprovante enviado." }, 400);
  }

  const subject = payload.perfil === "empresa"
    ? `[Negocia Mais] Novo contato comercial — ${payload.empresa_nome}`
    : `[Negocia Mais] Novo contato de suporte — ${payload.cliente_nome}`;

  const resendBody = {
    from: fromEmail,
    to: [contactEmail],
    reply_to: payload.email,
    subject,
    html: buildEmailHtml(payload, attachmentNote),
  };
  if (attachment) resendBody.attachments = [attachment];

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resendBody),
  });

  const resendData = await resendResponse.json().catch(() => ({}));
  if (!resendResponse.ok) {
    return json({ error: resendData?.message || resendData?.error || "Falha ao enviar o e-mail pelo provedor configurado." }, 502);
  }

  return json({ message: "Mensagem enviada com sucesso. Nossa equipe analisará o conteúdo e retornará pelo e-mail informado.", id: resendData?.id || null });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/config") return handleConfig(request, env);
    if (url.pathname === "/api/contact") return handleContact(request, env);
    return env.ASSETS.fetch(request);
  },
};
