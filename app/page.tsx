"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness,
  CalendarDays, Check, ChevronDown, Clock3, FileText, Instagram, Linkedin,
  Mail, MapPin, Menu, MessageCircle, Phone, Scale, ShieldCheck, Sparkles,
  X
} from "lucide-react";

const practiceAreas = [
  { title: "Direito de Família", description: "Orientação cuidadosa em divórcio, guarda, pensão e inventário.", icon: ShieldCheck },
  { title: "Direito Empresarial", description: "Apoio jurídico estratégico para negócios e empreendedores.", icon: BriefcaseBusiness },
  { title: "Direito Civil", description: "Contratos, responsabilidade civil e resolução de conflitos.", icon: FileText },
  { title: "Direito Trabalhista", description: "Atuação consultiva e contenciosa nas relações de trabalho.", icon: Scale }
];

const services = [
  "Consultoria e orientação jurídica",
  "Análise e elaboração de contratos",
  "Acompanhamento de processos",
  "Negociação e resolução de conflitos"
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><MapPin size={13} /> São Paulo, SP · Atendimento presencial e online</span>
          <a href="#contato">Agende uma conversa <ArrowUpRight size={13} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#inicio" aria-label="Dra. Marina Alves — início">
            <span className="brand-mark"><Scale size={23} strokeWidth={1.45} /></span>
            <span className="brand-copy"><strong>MARINA ALVES</strong><small>ADVOCACIA · OAB/SP 000.000</small></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Navegação principal">
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#atuacao" onClick={closeMenu}>Atuação</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
            <a className="nav-cta" href="#contato" onClick={closeMenu}>Fale comigo <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> ADVOCACIA COM ESTRATÉGIA E PROXIMIDADE</div>
            <h1>Segurança jurídica para você <em>seguir em frente.</em></h1>
            <p className="hero-lead">Orientação clara, atendimento próximo e soluções jurídicas pensadas para o que realmente importa na sua vida e no seu negócio.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contato">Vamos conversar <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#atuacao">Conheça minha atuação <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-trust"><span className="trust-icon"><ShieldCheck size={17} /></span><span>Atendimento ético, transparente e personalizado</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-backdrop" />
              <div className="portrait-orbit orbit-one" />
              <div className="portrait-orbit orbit-two" />
              <div className="portrait-placeholder">
                <div className="portrait-head" />
                <div className="portrait-neck" />
                <div className="portrait-body"><span className="portrait-lapel left" /><span className="portrait-lapel right" /></div>
              </div>
              <div className="portrait-label"><span className="portrait-label-dot" /><span><strong>MARINA ALVES</strong><small>ADVOGADA</small></span></div>
              <div className="experience-card"><span className="experience-icon"><Award size={20} /></span><span><strong>Atuação dedicada</strong><small>Compromisso em cada etapa</small></span></div>
              <span className="decorative-star star-a">✳</span><span className="decorative-star star-b">✧</span>
            </div>
            <div className="hero-caption">CLAREZA NO CAMINHO. FIRMEZA NA DEFESA.</div>
          </div>
        </div>
        <div className="hero-bottom-rule" />
      </section>

      <section className="intro-section section-pad" id="sobre">
        <div className="container intro-grid">
          <div className="section-kicker"><span>01</span><span className="kicker-rule" /> SOBRE MIM</div>
          <div className="intro-content">
            <p className="intro-overline">PRAZER, SOU A DRA. MARINA</p>
            <h2>Mais do que conhecer a lei, é preciso <em>entender pessoas.</em></h2>
            <div className="intro-columns">
              <p>Acredito que uma boa advocacia começa com escuta, transparência e uma estratégia construída junto com cada cliente. Meu papel é traduzir questões complexas em caminhos possíveis, com responsabilidade e dedicação.</p>
              <p>Este espaço foi criado para você conhecer meu trabalho, entender como posso ajudar e encontrar os canais certos para iniciar uma conversa com tranquilidade.</p>
            </div>
            <a className="text-link dark-link" href="#contato">Saiba como posso ajudar <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="practice-section section-pad" id="atuacao">
        <div className="container">
          <div className="section-heading">
            <div><div className="section-kicker"><span>02</span><span className="kicker-rule" /> ÁREAS DE ATUAÇÃO</div><h2>Conhecimento jurídico.<br /><em>Visão estratégica.</em></h2></div>
            <p>Cada situação exige atenção própria. Conheça algumas das áreas em que posso oferecer orientação jurídica.</p>
          </div>
          <div className="practice-grid">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return <article className="practice-card" key={area.title}>
                <div className="practice-card-top"><span className="practice-icon"><Icon size={22} strokeWidth={1.5} /></span><span className="card-number">0{index + 1}</span></div>
                <h3>{area.title}</h3><p>{area.description}</p><a href="#contato" aria-label={`Conversar sobre ${area.title}`}><ArrowUpRight size={18} /></a>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container quote-inner"><span className="quote-mark">“</span><blockquote>O primeiro passo para uma solução é compreender, com clareza, o caminho que temos pela frente.</blockquote><span className="quote-caption">MARINA ALVES · ADVOCACIA</span></div>
      </section>

      <section className="services-section section-pad" id="servicos">
        <div className="container services-grid">
          <div><div className="section-kicker"><span>03</span><span className="kicker-rule" /> COMO POSSO AJUDAR</div><h2>Orientação em cada <em>etapa.</em></h2><p className="services-intro">Do primeiro esclarecimento ao acompanhamento da sua demanda, você terá informação clara sobre os próximos passos.</p><a className="button button-dark" href="#contato">Entre em contato <ArrowUpRight size={16} /></a></div>
          <div className="service-list">{services.map((service, i) => <div className="service-row" key={service}><span className="service-check"><Check size={15} /></span><span>{service}</span><span className="service-index">0{i + 1}</span></div>)}</div>
        </div>
      </section>

      <section className="faq-section section-pad" id="duvidas">
        <div className="container faq-grid">
          <div><div className="section-kicker"><span>04</span><span className="kicker-rule" /> DÚVIDAS FREQUENTES</div><h2>Informação para <em>decidir melhor.</em></h2><p className="faq-intro">Algumas respostas iniciais para você saber como funciona o atendimento.</p></div>
          <div className="faq-list">
            {[
              ["Como funciona o primeiro contato?", "Você pode enviar uma mensagem explicando brevemente sua dúvida. A partir daí, alinhamos as informações necessárias e avaliamos os próximos passos."],
              ["O atendimento pode ser online?", "Sim. O atendimento pode ser realizado online ou presencialmente, conforme a natureza da demanda e a disponibilidade."],
              ["Como são definidos os honorários?", "Os honorários são explicados previamente, considerando a natureza, a complexidade e o trabalho envolvido, sempre com transparência."]
            ].map(([question, answer], i) => <div className={faqOpen === i ? "faq-item faq-item-open" : "faq-item"} key={question}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}><span>{question}</span><ChevronDown size={18} /></button>
              {faqOpen === i && <p>{answer}</p>}
            </div>)}
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contato">
        <div className="container contact-panel">
          <div className="contact-decoration"><Scale size={190} strokeWidth={0.5} /></div>
          <div className="contact-copy"><div className="section-kicker light-kicker"><span>05</span><span className="kicker-rule" /> CONTATO</div><h2>Vamos conversar sobre o que <em>importa para você?</em></h2><p>Entre em contato para saber mais sobre o atendimento e os caminhos possíveis para sua situação.</p><a className="button button-light" href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20jur%C3%ADdico." target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chamar no WhatsApp <ArrowUpRight size={16} /></a><small className="contact-note">Substitua o número de exemplo pelo WhatsApp profissional.</small></div>
          <div className="contact-details">
            <div><span className="contact-detail-icon"><Phone size={17} /></span><span><small>TELEFONE / WHATSAPP</small><strong>(11) 99999-9999</strong></span></div>
            <div><span className="contact-detail-icon"><Mail size={17} /></span><span><small>E-MAIL</small><strong>contato@marinaalves.adv.br</strong></span></div>
            <div><span className="contact-detail-icon"><MapPin size={17} /></span><span><small>LOCALIZAÇÃO</small><strong>São Paulo, SP</strong></span></div>
            <div><span className="contact-detail-icon"><Clock3 size={17} /></span><span><small>ATENDIMENTO</small><strong>Segunda a sexta, com agendamento</strong></span></div>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="container footer-main"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Scale size={22} /></span><span className="brand-copy"><strong>MARINA ALVES</strong><small>ADVOCACIA · OAB/SP 000.000</small></span></a><p>Ética, clareza e dedicação em cada orientação.</p><div className="social-links"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17} /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Marina Alves Advocacia. Todos os direitos reservados.</span><span>Este site tem caráter informativo e não substitui uma consulta jurídica.</span></div></footer>
      <a className="floating-whatsapp" href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" aria-label="Entrar em contato pelo WhatsApp"><MessageCircle size={23} /></a>
    </main>
  );
}
