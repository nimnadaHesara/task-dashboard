import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRightIcon,
  Bars3Icon,
  BoltIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  HomeModernIcon,
  LockClosedIcon,
  MapPinIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const defaultContent = {
  companyName: 'SmartTech',
  eyebrow: 'Engineering the connected future',
  headline: 'Built smart. Made to last.',
  intro:
    'We design and manufacture intelligent products that make homes, industries, and businesses work better.',
  phone: '+94 77 123 4567',
  email: 'hello@smarttech.example',
  address: 'Innovation Park, Colombo, Sri Lanka',
  heroVideo:
    'https://videos.pexels.com/video-files/3861969/3861969-hd_1920_1080_25fps.mp4',
};

const services = [
  {
    icon: SparklesIcon,
    number: '01',
    title: 'Electronic Manufacturing',
    text: 'From early prototypes to production-ready devices, we turn ambitious ideas into polished, reliable products.',
    tags: ['Prototyping', 'Assembly', 'Quality control'],
  },
  {
    icon: HomeModernIcon,
    number: '02',
    title: 'Smart Home Systems',
    text: 'Thoughtful automation that brings comfort, security, and energy intelligence to every room.',
    tags: ['IoT integration', 'Home security', 'Energy saving'],
  },
  {
    icon: Cog6ToothIcon,
    number: '03',
    title: 'Industrial Automation',
    text: 'Connected systems that improve uptime, visibility, and output across modern manufacturing operations.',
    tags: ['PLC & SCADA', 'Robotics', 'Process control'],
  },
  {
    icon: CpuChipIcon,
    number: '04',
    title: 'PCB Manufacturing',
    text: 'Precision circuit boards built with dependable materials, careful engineering, and production discipline.',
    tags: ['PCB design', 'SMT & THT', 'Testing'],
  },
];

const stats = [
  ['12+', 'years of engineering'],
  ['240+', 'projects delivered'],
  ['98%', 'on-time delivery'],
  ['24/7', 'technical support'],
];

function Logo({ dark = false }) {
  return (
    <a className="brand" href="#top" aria-label="SmartTech home">
      <span className={`brand-mark ${dark ? 'brand-mark-dark' : ''}`}>
        <span />
        <span />
        <span />
      </span>
      <span className="brand-name">Smart<span>Tech</span></span>
    </a>
  );
}

function App() {
  const [content, setContent] = useState(() => {
    try {
      return { ...defaultContent, ...JSON.parse(localStorage.getItem('smarttech-content') || '{}') };
    } catch {
      return defaultContent;
    }
  });
  const [adminOpen, setAdminOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = `${content.companyName} — Connected technology, built better`;
    localStorage.setItem('smarttech-content', JSON.stringify(content));
  }, [content]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <nav className={`main-nav ${mobileOpen ? 'main-nav-open' : ''}`} aria-label="Main navigation">
            <button onClick={() => scrollTo('services')}>Services</button>
            <button onClick={() => scrollTo('approach')}>Our approach</button>
            <button onClick={() => scrollTo('about')}>About us</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
            <button className="mobile-contact" onClick={() => setContactOpen(true)}>Start a project <ArrowRightIcon /></button>
          </nav>
          <div className="nav-actions">
            <button className="admin-link" onClick={() => setAdminOpen(true)} aria-label="Open content manager">
              <LockClosedIcon /> Admin
            </button>
            <button className="button button-dark nav-cta" onClick={() => setContactOpen(true)}>Start a project <ArrowRightIcon /></button>
            <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
              {mobileOpen ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid-pattern" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> {content.eyebrow}</div>
              <h1>{content.headline.split(' ').slice(0, -2).join(' ')} <em>{content.headline.split(' ').slice(-2).join(' ')}</em></h1>
              <p>{content.intro}</p>
              <div className="hero-buttons">
                <button className="button button-accent" onClick={() => setContactOpen(true)}>Talk to our team <ArrowRightIcon /></button>
                <button className="text-button" onClick={() => scrollTo('services')}><span className="play-circle"><PlayIcon /></span> Explore our services</button>
              </div>
              <div className="hero-proof"><div className="avatar-stack"><span>AK</span><span>RM</span><span>JL</span></div><div><strong>Trusted by forward-thinking teams</strong><small>Across 14 countries and counting</small></div></div>
            </div>
            <div className="hero-visual hero-video-visual" aria-label="Engineering excellence video">
              <div className="hero-video-frame">
                <video autoPlay muted loop playsInline poster="/logo512.png">
                  <source src={content.heroVideo} type="video/mp4" />
                </video>
                <div className="hero-video-shade" />
                <div className="video-caption"><span className="video-live-dot" /> Engineering excellence in motion</div>
                <div className="hero-capabilities">
                  <span><CpuChipIcon /> CNC + PCB</span>
                  <span><HomeModernIcon /> Smart home</span>
                  <span><GlobeAltIcon /> IT systems</span>
                </div>
              </div>
              <div className="floating-card card-quality"><CheckCircleIcon /><span><b>Quality first</b><small>ISO 9001 process</small></span></div>
              <div className="floating-card card-signal"><BoltIcon /><span><b>Connected</b><small>Built for tomorrow</small></span></div>
            </div>
          </div>
          <div className="container hero-bottom"><span>Scroll to discover</span><span className="scroll-line" /></div>
        </section>

        <section className="stats-strip"><div className="container stats-grid">{stats.map(([value, label]) => <div key={label} className="stat"><strong>{value}</strong><span>{label}</span></div>)}</div></section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading"><div><div className="eyebrow">What we do</div><h2>Technology that <em>moves you forward.</em></h2></div><p>We combine deep engineering expertise with a practical understanding of your goals, so every solution creates a measurable difference.</p></div>
            <div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="service-top"><span className="service-number">{service.number}</span><Icon className="service-icon" /></div><h3>{service.title}</h3><p>{service.text}</p><div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="learn-more" onClick={() => setContactOpen(true)}>Learn more <ArrowRightIcon /></button></article>; })}</div>
          </div>
        </section>

        <section className="section dark-section" id="approach">
          <div className="container approach-grid"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Why SmartTech</div><h2>From first spark to <em>full scale.</em></h2><p className="dark-lead">Great technology is not just about what is possible. It is about what is useful, dependable, and ready for the real world.</p><button className="button button-accent" onClick={() => setContactOpen(true)}>See how we work <ArrowRightIcon /></button></div><div className="process-list">{[['01', 'Listen deeply', 'We start with your context, constraints, and the outcome you want to create.'], ['02', 'Build deliberately', 'Our engineers prototype quickly, test thoroughly, and keep you close to every decision.'], ['03', 'Deliver confidently', 'A dependable handover, clear documentation, and support that stays with you.']].map(([no, title, text]) => <div className="process-item" key={no}><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRightIcon /></div>)}</div></div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid"><div className="about-image"><div className="about-orbit orbit-one" /><div className="about-orbit orbit-two" /><div className="about-core"><GlobeAltIcon /><span>SMART<br />BY DESIGN</span></div><div className="about-label label-one"><ShieldCheckIcon /> Tested</div><div className="about-label label-two"><WrenchScrewdriverIcon /> Precise</div></div><div className="about-copy"><div className="eyebrow">The SmartTech standard</div><h2>Small details. <em>Big impact.</em></h2><p>We believe the best solutions disappear into the experience. They feel simple, work reliably, and help people do more. That is why we sweat every component, connection, and line of code.</p><div className="check-list"><span><CheckCircleIcon /> Human-centered engineering</span><span><CheckCircleIcon /> Transparent collaboration</span><span><CheckCircleIcon /> Responsible manufacturing</span></div><button className="text-button dark-text-button" onClick={() => setContactOpen(true)}>Meet the team <ArrowRightIcon /></button></div></div>
        </section>

        <section className="contact-banner" id="contact"><div className="container contact-inner"><div><div className="eyebrow eyebrow-light">Have a challenge?</div><h2>Let’s make something <em>smart.</em></h2></div><button className="button button-accent" onClick={() => setContactOpen(true)}>Start a conversation <ArrowRightIcon /></button></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><Logo dark /><p>Connected technology, built better.<br />Engineering a more intelligent tomorrow.</p><div className="footer-contact"><a href={`mailto:${content.email}`}><EnvelopeIcon /> {content.email}</a><a href={`tel:${content.phone.replace(/\s/g, '')}`}><PhoneIcon /> {content.phone}</a><span><MapPinIcon /> {content.address}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {content.companyName}. All rights reserved.</span><span>Designed for a smarter future.</span></div></footer>

      {contactOpen && <ContactModal content={content} onClose={() => setContactOpen(false)} onSent={() => setSent(true)} sent={sent} />}
      {adminOpen && <AdminPanel content={content} setContent={setContent} onClose={() => setAdminOpen(false)} />}
    </div>
  );
}

function ContactModal({ content, onClose, onSent, sent }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const submit = (e) => { e.preventDefault(); onSent(); };
  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="modal-card"><button className="modal-close" onClick={onClose}><XMarkIcon /></button>{sent ? <div className="success-state"><CheckCircleIcon /><h2>Thanks for reaching out.</h2><p>Our team will get back to you shortly at {content.email}.</p><button className="button button-dark" onClick={onClose}>Close</button></div> : <><div className="eyebrow">Start a conversation</div><h2>Tell us what you’re building.</h2><p className="modal-intro">Share a few details and a SmartTech engineer will be in touch.</p><form onSubmit={submit}><label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label>Work email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label><label>How can we help?<textarea required rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project..." /></label><button className="button button-accent form-submit">Send enquiry <ArrowRightIcon /></button></form></>}</div></div>;
}

function AdminPanel({ content, setContent, onClose }) {
  const [draft, setDraft] = useState(content);
  const [saved, setSaved] = useState(false);
  const update = (key, value) => setDraft({ ...draft, [key]: value });
  const save = () => { setContent(draft); setSaved(true); setTimeout(() => setSaved(false), 2000); };
  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="admin-panel"><div className="admin-header"><div><div className="eyebrow">Content manager</div><h2>SmartTech admin</h2></div><button className="modal-close" onClick={onClose}><XMarkIcon /></button></div><div className="admin-note"><LockClosedIcon /><span>This lightweight editor saves content in this browser. For multi-user editing, connect these fields to a hosted database such as Supabase or Firebase.</span></div><div className="admin-form"><label>Company name<input value={draft.companyName} onChange={(e) => update('companyName', e.target.value)} /></label><label>Hero eyebrow<input value={draft.eyebrow} onChange={(e) => update('eyebrow', e.target.value)} /></label><label>Hero headline<input value={draft.headline} onChange={(e) => update('headline', e.target.value)} /></label>  <label>Hero introduction<textarea rows="3" value={draft.intro} onChange={(e) => update('intro', e.target.value)} /></label><label>Hero video URL<input type="url" value={draft.heroVideo} onChange={(e) => update('heroVideo', e.target.value)} placeholder="https://.../engineering-video.mp4" /></label><div className="admin-two-col"><label>Phone<input value={draft.phone} onChange={(e) => update('phone', e.target.value)} /></label><label>Email<input value={draft.email} onChange={(e) => update('email', e.target.value)} /></label></div><label>Address<input value={draft.address} onChange={(e) => update('address', e.target.value)} /></label></div><div className="admin-actions"><button className="button button-quiet" onClick={onClose}>Cancel</button><button className="button button-accent" onClick={save}>{saved ? 'Saved ✓' : 'Save changes'} </button></div></div></div>;
}

export default App;
