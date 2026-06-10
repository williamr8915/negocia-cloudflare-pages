
        // Modal Content Data

        const modalContents = {
            'consulta': {
                title: 'Como Consultar suas Propostas',
                content: `
                    <h4>Consulta inicial</h4>
                    <p>A consulta é o primeiro passo para verificar oportunidades de negociação com praticidade e segurança. Em um ambiente digital protegido, você visualiza as propostas disponíveis e entende o caminho mais adequado para o seu caso.</p>

                    <h4>O que normalmente é solicitado</h4>
                    <ul>
                        <li>CPF ou CNPJ vinculado ao caso</li>
                        <li>Nome completo ou razão social</li>
                        <li>E-mail e telefone para retorno</li>
                    </ul>

                    <div class="highlight-box">
                        <p>A consulta pode ser feita de forma digital, sem burocracia desnecessária e com linguagem clara durante toda a jornada.</p>
                    </div>

                    <h4>Depois da consulta</h4>
                    <p>Você poderá analisar as opções disponíveis, comparar condições e seguir para a alternativa que fizer mais sentido para a sua necessidade.</p>
                `
            },
            'avaliacao': {
                title: 'Como Avaliar as Propostas',
                content: `
                    <h4>Leitura clara das condições</h4>
                    <p>Após a consulta, a LexJud apresenta as opções de forma organizada para facilitar a comparação. O objetivo é permitir uma decisão consciente, sem pressão e com transparência.</p>

                    <h4>O que observar</h4>
                    <ul>
                        <li><strong>Valor total:</strong> quanto será pago ao final</li>
                        <li><strong>Forma de pagamento:</strong> à vista ou parcelado</li>
                        <li><strong>Número de parcelas:</strong> impacto no seu orçamento</li>
                        <li><strong>Entrada:</strong> valor inicial eventualmente exigido</li>
                        <li><strong>Descontos:</strong> condições especiais aplicadas ao caso</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Se fizer sentido, você também pode avançar para uma contraproposta dentro do fluxo disponível.</p>
                    </div>
                `
            },
            'negociacao': {
                title: 'Como Negociar',
                content: `
                    <h4>Negociação com autonomia</h4>
                    <p>A etapa de negociação foi pensada para ser simples, objetiva e segura. Você analisa as possibilidades disponíveis e segue com a alternativa mais compatível com seu cenário.</p>

                    <h4>Principais vantagens</h4>
                    <ul>
                        <li>Disponibilidade digital com mais conveniência</li>
                        <li>Menos atrito operacional e mais clareza</li>
                        <li>Registro do fluxo e das condições apresentadas</li>
                        <li>Privacidade e confidencialidade no atendimento</li>
                    </ul>

                    <div class="highlight-box">
                        <p>A LexJud atua como estrutura neutra de administração do procedimento, priorizando organização, segurança e comunicação objetiva.</p>
                    </div>
                `
            },
            'formalizacao': {
                title: 'Formalização do Acordo',
                content: `
                    <h4>Fechamento com segurança</h4>
                    <p>Quando a proposta é aceita, a formalização acontece de forma estruturada, com registro das condições pactuadas e documentação compatível com o procedimento adotado.</p>

                    <h4>O que você recebe</h4>
                    <ul>
                        <li>Confirmação das condições acordadas</li>
                        <li>Documento correspondente ao procedimento realizado</li>
                        <li>Orientações sobre pagamento e próximos passos</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Após a conclusão do fluxo, a equipe ou a plataforma orienta os passos seguintes de acordo com a natureza do acordo firmado.</p>
                    </div>
                `
            },
            'negociacao-digital': {
                title: 'Negociação Digital Espontânea',
                content: `
                    <h4>Uma jornada mais direta</h4>
                    <p>A Negociação Digital Espontânea é indicada para quem busca rapidez, autonomia e um processo organizado para analisar e concluir um acordo de forma online.</p>

                    <h4>Como funciona</h4>
                    <ul>
                        <li><strong>1. Consulta:</strong> verificação inicial da situação</li>
                        <li><strong>2. Propostas:</strong> apresentação das condições disponíveis</li>
                        <li><strong>3. Escolha:</strong> seleção da melhor alternativa</li>
                        <li><strong>4. Formalização:</strong> conclusão do fluxo com registro adequado</li>
                    </ul>

                    <div class="highlight-box">
                        <p>É o caminho mais enxuto para quem deseja resolver a demanda com praticidade, previsibilidade e boa experiência digital.</p>
                    </div>
                `
            },
            'mediacao': {
                title: 'Mediação',
                content: `
                    <h4>Quando o diálogo precisa de facilitação</h4>
                    <p>A mediação é indicada para situações em que as partes desejam construir uma solução com apoio de um terceiro imparcial, preservando comunicação, escuta e equilíbrio.</p>

                    <h4>Características</h4>
                    <ul>
                        <li>Condução por profissional imparcial</li>
                        <li>Ambiente confidencial e estruturado</li>
                        <li>Foco em composição consensual</li>
                        <li>Flexibilidade para casos com diferentes níveis de complexidade</li>
                    </ul>

                    <div class="highlight-box">
                        <p>É uma alternativa especialmente útil quando o acordo depende de construção conjunta e melhor alinhamento entre as partes.</p>
                    </div>
                `
            },
            'conciliacao': {
                title: 'Conciliação',
                content: `
                    <h4>Objetividade na construção do acordo</h4>
                    <p>Na conciliação, o foco está na busca de uma solução prática, com condução organizada e abordagem mais objetiva para aproximação das partes.</p>

                    <h4>Diferenciais</h4>
                    <ul>
                        <li>Fluxo mais direto para encerramento do conflito</li>
                        <li>Organização das condições de composição</li>
                        <li>Formalização adequada ao procedimento</li>
                        <li>Atendimento com linguagem simples e clara</li>
                    </ul>

                    <div class="highlight-box">
                        <p>É uma alternativa eficiente para casos que exigem rapidez, pragmatismo e boa coordenação do procedimento.</p>
                    </div>
                `
            },
            'arbitragem': {
                title: 'Arbitragem',
                content: `
                    <h4>Decisão técnica em ambiente privado</h4>
                    <p>A arbitragem é indicada para conflitos em que as partes buscam uma solução definitiva em procedimento privado, com condução técnica e organização compatível com disputas de maior complexidade.</p>

                    <h4>Características</h4>
                    <ul>
                        <li>Procedimento privado e estruturado</li>
                        <li>Condução por profissional imparcial</li>
                        <li>Maior previsibilidade operacional</li>
                        <li>Adequação para relações empresariais e casos complexos</li>
                    </ul>

                    <div class="highlight-box">
                        <p>A LexJud organiza o fluxo arbitral com foco em segurança, clareza documental e boa governança do procedimento.</p>
                    </div>
                `
            },
            'area-empresas': {
                title: 'Soluções para Empresas',
                content: `
                    <h4>Estrutura operacional para carteiras e conflitos</h4>
                    <p>A área corporativa da LexJud foi pensada para empresas que precisam administrar negociações, procedimentos e indicadores com mais centralização e visão gerencial.</p>

                    <h4>O que a operação pode contemplar</h4>
                    <ul>
                        <li>Visão consolidada de performance e andamento</li>
                        <li>Gestão de casos com histórico e rastreabilidade</li>
                        <li>Integrações operacionais e rotinas em lote</li>
                        <li>Governança, segurança da informação e conformidade</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Para conhecer o modelo corporativo, utilize o formulário de empresa parceira ou fale com nossa equipe comercial.</p>
                    </div>
                `
            },
            'quem-somos': {
                title: 'Quem Somos',
                content: `
                    <h4>Identidade institucional</h4>
                    <p>A LexJud é uma câmara privada voltada à conciliação, mediação, arbitragem e negociação digital. Nossa atuação combina estrutura jurídica, experiência digital e comunicação clara para tornar os procedimentos mais acessíveis e organizados.</p>

                    <h4>Como atuamos</h4>
                    <ul>
                        <li>Neutralidade na condução dos procedimentos</li>
                        <li>Ambiente digital com foco em segurança e rastreabilidade</li>
                        <li>Fluxos pensados para pessoas e empresas</li>
                        <li>Atendimento objetivo, respeitoso e sem excesso de burocracia</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Nosso propósito é oferecer uma jornada mais simples, segura e confiável para resolução extrajudicial de conflitos.</p>
                    </div>
                `
            },
            'equipe': {
                title: 'Nossa Equipe',
                content: `
                    <h4>Equipe multidisciplinar</h4>
                    <p>A LexJud reúne profissionais de atendimento, operação e especialistas vinculados aos métodos adequados de resolução de conflitos, formando uma estrutura preparada para apoiar casos de diferentes perfis.</p>

                    <h4>Compromissos da equipe</h4>
                    <ul>
                        <li>Atendimento com clareza e respeito</li>
                        <li>Condução ética e imparcial dos procedimentos</li>
                        <li>Padronização operacional e cuidado documental</li>
                        <li>Foco em segurança da informação e conformidade</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Cada etapa é orientada para oferecer previsibilidade, boa comunicação e uma experiência digital consistente.</p>
                    </div>
                `
            },
            'parceiros': {
                title: 'Parceiros',
                content: `
                    <h4>Parcerias institucionais e operacionais</h4>
                    <p>A LexJud desenvolve parcerias com empresas, credores e organizações que buscam uma estrutura confiável para organizar negociações, procedimentos e atendimento especializado.</p>

                    <h4>O que uma parceria pode envolver</h4>
                    <ul>
                        <li>Operação digital mais organizada</li>
                        <li>Melhoria de experiência para clientes e usuários</li>
                        <li>Acompanhamento por indicadores e histórico</li>
                        <li>Integração com processos internos conforme a necessidade</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Se sua empresa deseja conhecer o modelo de parceria, utilize o formulário corporativo para que nosso time retorne com mais contexto.</p>
                    </div>
                `
            },
            'imprensa': {
                title: 'Imprensa',
                content: `
                    <h4>Relacionamento institucional</h4>
                    <p>A LexJud mantém canal para solicitações institucionais, esclarecimentos sobre atuação da câmara e demandas de comunicação relacionadas à marca e às frentes de operação.</p>

                    <h4>Assuntos atendidos</h4>
                    <ul>
                        <li>Solicitações de informações institucionais</li>
                        <li>Apresentação institucional e posicionamento da marca</li>
                        <li>Contato para pautas e demandas de comunicação</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Para assuntos de imprensa e relacionamento institucional, utilize <a href="mailto:contato@lexjud.com.br">contato@lexjud.com.br</a> com a identificação do veículo ou da solicitação.</p>
                    </div>
                `
            },
            'privacidade': {
                title: 'Política de Privacidade',
                content: `
                    <h4>Compromisso com a proteção de dados</h4>
                    <p>A LexJud trata dados pessoais com base em critérios de necessidade, segurança e conformidade, buscando transparência em todas as etapas da jornada digital.</p>

                    <h4>O que esta política esclarece</h4>
                    <ul>
                        <li>Quais dados podem ser tratados durante o uso dos serviços</li>
                        <li>Para quais finalidades essas informações são utilizadas</li>
                        <li>Como a segurança e a confidencialidade são observadas</li>
                        <li>Quais canais podem ser usados para solicitações relacionadas à privacidade</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Demandas de privacidade, proteção de dados e compliance devem ser direcionadas para <a href="mailto:complice@lexjud.com.br">complice@lexjud.com.br</a>. Para atendimento geral, utilize <a href="mailto:contato@lexjud.com.br">contato@lexjud.com.br</a>.</p>
                    </div>
                `
            },
            'termos': {
                title: 'Termos de Uso',
                content: `
                    <h4>Regras gerais de utilização</h4>
                    <p>Os Termos de Uso apresentam as diretrizes básicas para navegação, utilização dos fluxos digitais e relacionamento com a infraestrutura disponibilizada pela LexJud.</p>

                    <h4>Pontos centrais</h4>
                    <ul>
                        <li>Uso responsável e fornecimento de informações corretas</li>
                        <li>Respeito às regras da plataforma e aos limites legais aplicáveis</li>
                        <li>Proteção das credenciais e dados de acesso</li>
                        <li>Observância das políticas institucionais e de privacidade</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Questões institucionais, regulatórias e de compliance relacionadas aos termos podem ser encaminhadas para <a href="mailto:complice@lexjud.com.br">complice@lexjud.com.br</a>. Demandas gerais de atendimento seguem por <a href="mailto:contato@lexjud.com.br">contato@lexjud.com.br</a>.</p>
                    </div>
                `
            },
            'LGPD': {
                title: 'LGPD e Direitos do Titular',
                content: `
                    <h4>Direitos relacionados aos seus dados</h4>
                    <p>A Lei Geral de Proteção de Dados garante ao titular direitos relacionados ao tratamento de suas informações pessoais, como confirmação, acesso, correção e revisão de dados em contextos aplicáveis.</p>

                    <h4>Como acionar a LexJud</h4>
                    <ul>
                        <li>Solicitações sobre privacidade e proteção de dados</li>
                        <li>Pedidos de esclarecimento sobre tratamento de informações</li>
                        <li>Demandas ligadas a governança, compliance e segurança</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Canal oficial para privacidade e compliance: <a href="mailto:complice@lexjud.com.br">complice@lexjud.com.br</a>. Para demais atendimentos, utilize <a href="mailto:contato@lexjud.com.br">contato@lexjud.com.br</a>.</p>
                    </div>
                `
            },
            'honorarios': {
                title: 'Tabela de Honorários',
                content: `
                    <h4>Referência de custos e procedimentos</h4>
                    <p>A tabela de honorários apresenta parâmetros de cobrança aplicáveis aos procedimentos administrados pela LexJud, observando a natureza do serviço, o nível de complexidade e a forma de condução do caso.</p>

                    <h4>Itens normalmente considerados</h4>
                    <ul>
                        <li>Taxa administrativa do procedimento</li>
                        <li>Honorários relacionados à atuação técnica</li>
                        <li>Custos adicionais conforme complexidade e escopo</li>
                        <li>Condições de pagamento aplicáveis ao caso</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Em atendimentos gerais e dúvidas operacionais, utilize <a href="mailto:contato@lexjud.com.br">contato@lexjud.com.br</a>. Para temas regulatórios e de compliance associados à documentação institucional, utilize <a href="mailto:complice@lexjud.com.br">complice@lexjud.com.br</a>.</p>
                    </div>
                `
            },
            'regulamento-mediacao': {
                title: 'Regulamento de Mediação',
                content: `
                    <h4>Regras de condução do procedimento</h4>
                    <p>O regulamento de mediação organiza os princípios, etapas e critérios básicos para condução do procedimento com segurança, imparcialidade e previsibilidade.</p>

                    <h4>Pontos estruturais</h4>
                    <ul>
                        <li>Voluntariedade e participação das partes</li>
                        <li>Confidencialidade do procedimento</li>
                        <li>Atuação de profissional imparcial</li>
                        <li>Formalização adequada do resultado obtido</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Dúvidas sobre o procedimento podem ser encaminhadas para <a href="mailto:contato@lexjud.com.br">contato@lexjud.com.br</a>. Questões institucionais e de compliance podem ser direcionadas a <a href="mailto:complice@lexjud.com.br">complice@lexjud.com.br</a>.</p>
                    </div>
                `
            },
            'regulamento-arbitragem': {
                title: 'Regulamento de Arbitragem',
                content: `
                    <h4>Estrutura do procedimento arbitral</h4>
                    <p>O regulamento de arbitragem define a base organizacional do procedimento, com diretrizes voltadas à imparcialidade, segurança documental e adequada administração da disputa.</p>

                    <h4>Temas cobertos</h4>
                    <ul>
                        <li>Instauração do procedimento</li>
                        <li>Critérios gerais de condução</li>
                        <li>Organização documental e comunicacional</li>
                        <li>Formalização do resultado arbitral</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Para orientações institucionais e dúvidas sobre documentação, utilize <a href="mailto:contato@lexjud.com.br">contato@lexjud.com.br</a>. Para questões de compliance e governança, utilize <a href="mailto:complice@lexjud.com.br">complice@lexjud.com.br</a>.</p>
                    </div>
                `
            },
            'conduta': {
                title: 'Código de Conduta',
                content: `
                    <h4>Princípios que orientam a atuação</h4>
                    <p>O Código de Conduta da LexJud reúne diretrizes relacionadas à ética, imparcialidade, respeito, confidencialidade, integridade e boa governança institucional.</p>

                    <h4>Diretrizes centrais</h4>
                    <ul>
                        <li>Neutralidade e independência</li>
                        <li>Sigilo e proteção das informações</li>
                        <li>Transparência nas interações e comunicações</li>
                        <li>Prevenção de conflitos de interesse e condutas inadequadas</li>
                    </ul>

                    <div class="highlight-box">
                        <p>Canal de denúncias: <a href="mailto:denuncia@lexjud.com.br">denuncia@lexjud.com.br</a>. Para temas de compliance, utilize <a href="mailto:complice@lexjud.com.br">complice@lexjud.com.br</a>. Atendimento geral: <a href="mailto:contato@lexjud.com.br">contato@lexjud.com.br</a>.</p>
                    </div>
                `
            }
        };


        function openModal(modalId) {
            const modalOverlay = document.getElementById('modalOverlay');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');

            const content = modalContents[modalId];

            if (content) {
                modalTitle.textContent = content.title;
                modalBody.innerHTML = content.content;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal(event) {
            if (event && event.target !== event.currentTarget) {
                return;
            }

            const modalOverlay = document.getElementById('modalOverlay');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Form submission handler
        const consultaForm = document.querySelector('#consultaForm');
        if (consultaForm) {
            consultaForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const cpfEl = document.getElementById('cpf-consulta');
                const nomeEl = document.getElementById('nome-consulta');
                const emailEl = document.getElementById('email-consulta');
                const cpf = cpfEl ? cpfEl.value : '';
                const nome = nomeEl ? nomeEl.value : '';
                const email = emailEl ? emailEl.value : '';

                if (cpf && nome && email) {
                    alert('Obrigado! Em breve você receberá um e-mail com as propostas disponíveis para sua situação.');
                } else {
                    alert('Por favor, preencha todos os campos.');
                }
            });
        }

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Testimonial Carousel Functionality
        let currentSlide = 0;
        const slidesToShow = 3;
        let totalSlides = 0;

        function initCarousel() {
            const container = document.getElementById('testimonialCarousel');
            if (!container) return;

            const slides = container.querySelectorAll('.carousel-slide');
            totalSlides = slides.length;

            // Update slide width based on screen size
            updateSlideWidth();

            // Auto-advance every 5 seconds
            setInterval(() => {
                moveCarousel(1);
            }, 5000);
        }

        function updateSlideWidth() {
            const container = document.getElementById('testimonialCarousel');
            if (!container) return;

            const width = window.innerWidth;
            let visibleSlides = 3;

            if (width <= 768) {
                visibleSlides = 1;
            } else if (width <= 1024) {
                visibleSlides = 2;
            }

            const slides = container.querySelectorAll('.carousel-slide');
            slides.forEach(slide => {
                slide.style.minWidth = `calc(${100 / visibleSlides}% - 16px)`;
                slide.style.maxWidth = `calc(${100 / visibleSlides}% - 16px)`;
            });

            // Reset position when resizing
            currentSlide = 0;
            container.style.transform = `translateX(0)`;
        }

        function moveCarousel(direction) {
            const container = document.getElementById('testimonialCarousel');
            if (!container) return;

            const width = window.innerWidth;
            let visibleSlides = 3;

            if (width <= 768) {
                visibleSlides = 1;
            } else if (width <= 1024) {
                visibleSlides = 2;
            }

            const slides = container.querySelectorAll('.carousel-slide');
            const totalSlides = slides.length;
            const maxSlide = Math.max(0, totalSlides - visibleSlides);

            currentSlide += direction;

            if (currentSlide < 0) {
                currentSlide = maxSlide;
            } else if (currentSlide > maxSlide) {
                currentSlide = 0;
            }

            const slideWidth = slides[0]?.offsetWidth || (window.innerWidth / visibleSlides);
            const offset = currentSlide * (slideWidth + 24); // 24px is the gap

            container.style.transition = 'transform 0.5s ease-in-out';
            container.style.transform = `translateX(-${offset}px)`;

            // Update dots
            updateDots();
        }

        function updateDots() {
            const dots = document.querySelectorAll('.carousel-dot');
            const width = window.innerWidth;
            let visibleSlides = 3;

            if (width <= 768) {
                visibleSlides = 1;
            } else if (width <= 1024) {
                visibleSlides = 2;
            }

            const slides = document.getElementById('testimonialCarousel')?.querySelectorAll('.carousel-slide');
            if (!slides) return;

            const totalSlides = slides.length;
            const maxDot = Math.max(0, Math.ceil(totalSlides / visibleSlides) - 1);
            const currentDot = Math.min(currentSlide, maxDot);

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentDot);
            });
        }

        // Initialize carousel on load
        window.addEventListener('load', initCarousel);
        window.addEventListener('resize', updateSlideWidth);
    

// Refinements for Cloudflare Pages package
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');
  const headerButtons = document.querySelector('.header-buttons');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
      if (headerButtons) headerButtons.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = (document.querySelector('header')?.offsetHeight || 0) + 18;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
      if (nav) nav.classList.remove('active');
      if (headerButtons) headerButtons.classList.remove('active');
      if (menuToggle) menuToggle.classList.remove('active');
    });
  });

  const floating = document.getElementById('floating-propostas');
  const footer = document.querySelector('footer');
  function updateFloating() {
    if (!floating) return;
    if (window.scrollY > 360) floating.classList.add('is-visible');
    else floating.classList.remove('is-visible');

    let bottom = window.innerWidth <= 640 ? 14 : 22;
    if (footer) {
      const rect = footer.getBoundingClientRect();
      const overlap = Math.max(0, window.innerHeight - rect.top + 14);
      bottom += overlap;
    }
    floating.style.bottom = bottom + 'px';
  }
  updateFloating();
  window.addEventListener('scroll', updateFloating, { passive: true });
  window.addEventListener('resize', updateFloating);
});

// ===== Premium contact modal and floating position logic =====
function setFormFeedback(target, type, message) {
  if (!target) return;
  target.className = 'contact-form-feedback is-visible ' + (type === 'success' ? 'is-success' : 'is-error');
  target.textContent = message;
}

function clearFormFeedback(target) {
  if (!target) return;
  target.className = 'contact-form-feedback';
  target.textContent = '';
}

function resetTurnstileFor(form) {
  if (!form || !window.turnstile) return;
  const widget = form.querySelector('.cf-turnstile');
  if (widget) {
    try { window.turnstile.reset(widget); } catch (error) {}
  }
}

function getTurnstileToken(form) {
  return form?.querySelector('[name="cf-turnstile-response"]')?.value?.trim() || '';
}

function setContactProfile(profile) {
  const normalized = profile === 'empresa' ? 'empresa' : 'cliente';
  ['cliente', 'empresa'].forEach(function(name) {
    const button = document.querySelector('.contact-profile-btn[data-contact-profile="' + name + '"]');
    const panel = document.getElementById(name === 'cliente' ? 'contactClientForm' : 'contactBusinessForm');
    const active = name === normalized;
    if (button) button.classList.toggle('active', active);
    if (panel) panel.classList.toggle('active', active);
  });
}

function openContactModal(profile) {
  const overlay = document.getElementById('contactFormOverlay');
  if (!overlay) return;
  setContactProfile(profile || 'cliente');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const activeForm = document.querySelector('.contact-form-panel.active');
  if (activeForm) {
    clearFormFeedback(activeForm.querySelector('.contact-form-feedback'));
    setTimeout(function() {
      activeForm.querySelector('input, textarea, button')?.focus();
      resetTurnstileFor(activeForm);
    }, 30);
  }
}

function closeContactModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const overlay = document.getElementById('contactFormOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

async function submitContactForm(form, payload, feedbackEl, submitButton) {
  clearFormFeedback(feedbackEl);

  const turnstileToken = getTurnstileToken(form);
  if (!turnstileToken) {
    setFormFeedback(feedbackEl, 'error', 'Confirme a verificação de segurança para enviar o formulário.');
    return false;
  }

  submitButton.disabled = true;
  const originalLabel = submitButton.textContent;
  submitButton.textContent = 'Enviando...';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...payload,
        turnstileToken
      })
    });

    const result = await response.json().catch(function() { return {}; });

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Não foi possível enviar sua solicitação agora.');
    }

    setFormFeedback(feedbackEl, 'success', result.message || 'Solicitação enviada com sucesso.');
    form.reset();
    if (form.id === 'contactClientForm') {
      const defaultChip = document.querySelector('#clientTopics .contact-chip');
      if (defaultChip) activateTopicChip(defaultChip);
    }
    resetTurnstileFor(form);
    setTimeout(function() {
      closeContactModal();
    }, 1400);
    return true;
  } catch (error) {
    setFormFeedback(feedbackEl, 'error', error.message || 'Não foi possível enviar sua solicitação agora.');
    resetTurnstileFor(form);
    return false;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.js-open-contact-modal').forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();
      openContactModal(this.getAttribute('data-profile') || 'cliente');
    });
  });

  document.querySelectorAll('.contact-profile-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      setContactProfile(this.getAttribute('data-contact-profile'));
      const targetForm = document.getElementById(this.getAttribute('data-contact-profile') === 'empresa' ? 'contactBusinessForm' : 'contactClientForm');
      clearFormFeedback(targetForm?.querySelector('.contact-form-feedback'));
      resetTurnstileFor(targetForm);
    });
  });

  const topicInput = document.getElementById('clientTopicValues');
  const chips = document.querySelectorAll('#clientTopics .contact-chip');

  function activateTopicChip(targetChip) {
    if (!targetChip) return;
    chips.forEach(function(chip) {
      const active = chip === targetChip;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (topicInput) topicInput.value = targetChip.getAttribute('data-value') || '';
  }

  if (chips.length) {
    const defaultChip = Array.from(chips).find(function(chip) { return chip.classList.contains('active'); }) || chips[0];
    activateTopicChip(defaultChip);
  }

  chips.forEach(function(chip) {
    chip.addEventListener('click', function() {
      activateTopicChip(this);
    });
  });

  const clientForm = document.getElementById('contactClientForm');
  if (clientForm) {
    clientForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const feedbackEl = document.getElementById('contactClientFeedback');
      const submitButton = this.querySelector('button[type="submit"]');
      const payload = {
        profile: 'cliente',
        nome: document.getElementById('clientName')?.value?.trim() || '',
        email: document.getElementById('clientEmail')?.value?.trim() || '',
        telefone: document.getElementById('clientPhone')?.value?.trim() || '',
        cpf: document.getElementById('clientCpf')?.value?.trim() || '',
        assuntos: document.getElementById('clientTopicValues')?.value?.trim() || '',
        mensagem: document.getElementById('clientMessage')?.value?.trim() || '',
        website: document.getElementById('clientWebsite')?.value?.trim() || ''
      };

      if (!payload.nome || !payload.email || !payload.telefone || !payload.cpf) {
        setFormFeedback(feedbackEl, 'error', 'Preencha nome, e-mail, telefone e CPF para continuar.');
        return;
      }

      await submitContactForm(this, payload, feedbackEl, submitButton);
    });
  }

  const businessForm = document.getElementById('contactBusinessForm');
  if (businessForm) {
    businessForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const feedbackEl = document.getElementById('contactBusinessFeedback');
      const submitButton = this.querySelector('button[type="submit"]');
      const payload = {
        profile: 'empresa',
        empresa: document.getElementById('companyName')?.value?.trim() || '',
        responsavel: document.getElementById('companyResponsible')?.value?.trim() || '',
        telefone: document.getElementById('companyPhone')?.value?.trim() || '',
        email: document.getElementById('companyEmail')?.value?.trim() || '',
        data: document.getElementById('meetingDate')?.value?.trim() || '',
        hora: document.getElementById('meetingTime')?.value?.trim() || '',
        necessidade: document.getElementById('companyNeeds')?.value?.trim() || '',
        website: document.getElementById('companyWebsite')?.value?.trim() || ''
      };

      if (!payload.empresa || !payload.responsavel || !payload.telefone || !payload.email || !payload.necessidade) {
        setFormFeedback(feedbackEl, 'error', 'Preencha empresa, responsável, telefone, e-mail e descrição para continuar.');
        return;
      }

      await submitContactForm(this, payload, feedbackEl, submitButton);
    });
  }

  const floatingActions = document.getElementById('floatingActions');
  const footer = document.querySelector('footer');
  function updateFloatingActions() {
    if (!floatingActions) return;
    floatingActions.classList.toggle('is-visible', window.scrollY > 360);

    let bottom = window.innerWidth <= 640 ? 82 : 94;
    if (footer) {
      const rect = footer.getBoundingClientRect();
      const overlap = Math.max(0, window.innerHeight - rect.top + 20);
      bottom += overlap;
    }
    floatingActions.style.bottom = bottom + 'px';
  }
  updateFloatingActions();
  window.addEventListener('scroll', updateFloatingActions, { passive: true });
  window.addEventListener('resize', updateFloatingActions);

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeContactModal();
  });
});


// ===== Round 4 | refinamentos de menu, modal e CTAs flutuantes =====
(function () {
  function applyClientTopicByValue(value) {
    if (!value) return;
    const chips = Array.from(document.querySelectorAll('#clientTopics .contact-chip'));
    if (!chips.length) return;
    const topicInput = document.getElementById('clientTopicValues');
    const normalized = value.trim().toLowerCase();
    const targetChip = chips.find(function (chip) {
      return (chip.getAttribute('data-value') || '').trim().toLowerCase() === normalized;
    }) || chips.find(function (chip) {
      return (chip.textContent || '').trim().toLowerCase() === normalized;
    });
    if (!targetChip) return;
    chips.forEach(function (chip) {
      const active = chip === targetChip;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (topicInput) topicInput.value = targetChip.getAttribute('data-value') || targetChip.textContent.trim();
  }

  function applyCompanyIntent(value) {
    if (!value) return;
    const select = document.getElementById('companyInterest');
    if (!select) return;
    const targetValue = Array.from(select.options).find(function (option) {
      return option.value === value;
    });
    select.value = targetValue ? targetValue.value : select.options[0].value;
  }

  function syncBusinessMessageFromFields() {
    const textarea = document.getElementById('companyNeeds');
    if (!textarea) return;
    const intent = document.getElementById('companyInterest')?.value?.trim();
    const role = document.getElementById('companyRole')?.value?.trim();
    const department = document.getElementById('companyDepartment')?.value?.trim();
    const volume = document.getElementById('companyVolume')?.value?.trim();
    const currentMessage = textarea.value.trim();
    const blocks = [];
    if (intent) blocks.push('Motivo principal: ' + intent);
    if (role) blocks.push('Cargo do responsável: ' + role);
    if (department) blocks.push('Área/departamento: ' + department);
    if (volume) blocks.push('Volume estimado: ' + volume);
    if (currentMessage) blocks.push('Detalhes informados: ' + currentMessage);
    textarea.value = blocks.join('\n');
  }

  function bindEnhancedModalTriggers() {
    document.querySelectorAll('.js-open-contact-modal, .footer-email-link').forEach(function (trigger) {
      if (trigger.dataset.lexjudTriggerBound === 'true') return;
      trigger.dataset.lexjudTriggerBound = 'true';
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        const profile = this.getAttribute('data-profile') || 'cliente';
        openContactModal(profile);
        const topic = this.getAttribute('data-contact-topic');
        const companyIntent = this.getAttribute('data-company-intent');
        setTimeout(function () {
          if (profile === 'empresa') {
            applyCompanyIntent(companyIntent || 'Quero conhecer a plataforma');
          } else {
            applyClientTopicByValue(topic || 'Atendimento geral');
          }
        }, 40);
      }, true);
    });
  }

  function installRobustMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');
    const headerButtons = document.querySelector('.header-buttons');
    const header = document.querySelector('header');
    if (!menuToggle || !nav) return;

    const replacement = menuToggle.cloneNode(true);
    menuToggle.parentNode.replaceChild(replacement, menuToggle);

    function setMenuState(isOpen) {
      nav.classList.toggle('active', isOpen);
      if (headerButtons) headerButtons.classList.toggle('active', isOpen);
      replacement.classList.toggle('active', isOpen);
      replacement.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (header) header.classList.toggle('mobile-menu-open', isOpen);
    }

    setMenuState(false);

    replacement.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      setMenuState(!nav.classList.contains('active'));
    });

    document.addEventListener('click', function (event) {
      if (window.innerWidth > 768) return;
      if (!header || header.contains(event.target)) return;
      setMenuState(false);
    });

    document.querySelectorAll('header nav a, .header-portal-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) setMenuState(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenuState(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) setMenuState(false);
    });
  }

  function syncFloatingActionsRound4() {
    const floatingActions = document.getElementById('floatingActions');
    const footer = document.querySelector('footer');
    if (!floatingActions) return;

    const isMobile = window.innerWidth <= 768;
    const threshold = isMobile ? 520 : 360;
    floatingActions.classList.toggle('is-visible', window.scrollY > threshold);

    let bottom = isMobile ? 86 : 94;
    if (footer) {
      const rect = footer.getBoundingClientRect();
      const overlap = Math.max(0, window.innerHeight - rect.top + 20);
      bottom += overlap;
    }
    floatingActions.style.bottom = bottom + 'px';
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindEnhancedModalTriggers();
    installRobustMobileMenu();
    syncFloatingActionsRound4();

    const businessForm = document.getElementById('contactBusinessForm');
    if (businessForm) {
      businessForm.addEventListener('submit', function () {
        syncBusinessMessageFromFields();
      }, true);
    }

    ['companyInterest', 'companyRole', 'companyDepartment', 'companyVolume'].forEach(function (id) {
      const field = document.getElementById(id);
      if (field) field.addEventListener('change', syncBusinessMessageFromFields);
      if (field) field.addEventListener('blur', syncBusinessMessageFromFields);
    });

    window.addEventListener('scroll', syncFloatingActionsRound4, { passive: true });
    window.addEventListener('resize', syncFloatingActionsRound4);
    setTimeout(syncFloatingActionsRound4, 160);
    setTimeout(syncFloatingActionsRound4, 520);
  });
})();


// ===== Round 5.1 | floating safety + payload enrichment =====
(function () {
  function getViewportSafeBottom() {
    if (!window.visualViewport) return 0;
    const inset = window.innerHeight - window.visualViewport.height - window.visualViewport.offsetTop;
    return Math.max(0, Math.round(inset));
  }

  function syncFloatingActionsRound51() {
    const floatingActions = document.getElementById('floatingActions');
    if (!floatingActions) return;

    const footer = document.querySelector('footer');
    const isMobile = window.innerWidth <= 768;
    const safeBottom = getViewportSafeBottom();
    let bottom = (isMobile ? 82 : 94) + safeBottom;

    if (footer) {
      const rect = footer.getBoundingClientRect();
      const overlap = Math.max(0, window.innerHeight - rect.top + 20);
      bottom += overlap;
    }

    floatingActions.style.bottom = bottom + 'px';
    floatingActions.style.maxWidth = (isMobile ? (window.innerWidth - 24) : 320) + 'px';
    floatingActions.classList.toggle('is-visible', window.scrollY > (isMobile ? 520 : 360));
  }

  function enrichContactPayload(payload) {
    return Object.assign({
      origem: 'site-modal',
      pagina: window.location.href,
      referrer: document.referrer || '',
      enviadoEm: new Date().toISOString(),
      viewport: window.innerWidth + 'x' + window.innerHeight,
      userAgent: navigator.userAgent
    }, payload || {});
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.submitContactForm === 'function' && !window.submitContactForm.__round51Wrapped) {
      const originalSubmitContactForm = window.submitContactForm;
      const wrappedSubmit = async function (form, payload, feedbackEl, submitButton) {
        return originalSubmitContactForm(form, enrichContactPayload(payload), feedbackEl, submitButton);
      };
      wrappedSubmit.__round51Wrapped = true;
      window.submitContactForm = wrappedSubmit;
    }

    syncFloatingActionsRound51();
    window.addEventListener('scroll', syncFloatingActionsRound51, { passive: true });
    window.addEventListener('resize', syncFloatingActionsRound51);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', syncFloatingActionsRound51);
      window.visualViewport.addEventListener('scroll', syncFloatingActionsRound51);
    }
  });
})();
