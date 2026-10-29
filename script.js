'use strict';

/* =============================================
   CONFIG
============================================= */
const CONTACT_EMAIL = 'ahana.chau99@gmail.com';

/* =============================================
   SKILL CATEGORIES (from resume)
============================================= */
const skillCategories = [
  { id: 'all',        icon: '',    label: 'All' },
  { id: 'writing',    icon: '',    label: 'Writing' },
  { id: 'management', icon: '',    label: 'Management' },
  { id: 'api',        icon: '',    label: 'API & Dev Docs' },
  { id: 'tools',      icon: '',    label: 'Tools' },
  { id: 'learning',   icon: '',    label: 'Learning' },
  { id: 'quality',    icon: '',    label: 'Quality' },
];

/* =============================================
   SKILLS — full resume content, segregated by category
============================================= */
const skills = [
  /* Technical Writing & Documentation */
  { name: 'Technical Writing',              category: 'writing' },
  { name: 'Technical Documentation',        category: 'writing' },
  { name: 'Developer Documentation',        category: 'writing' },
  { name: 'API Documentation',              category: 'writing' },
  { name: 'Procedure Writing',              category: 'writing' },
  { name: 'Technical Editing',              category: 'writing' },
  { name: 'Peer Reviews',                   category: 'writing' },
  { name: 'Troubleshooting Docs',           category: 'writing' },
  { name: 'Process Flow Docs',              category: 'writing' },
  { name: 'User Guides',                    category: 'writing' },
  { name: 'Administrator Guides',           category: 'writing' },
  { name: 'Knowledge Base Articles',        category: 'writing' },
  { name: 'FAQs',                           category: 'writing' },
  { name: 'SOPs',                           category: 'writing' },

  /* Documentation Management */
  { name: 'Documentation Lifecycle',        category: 'management' },
  { name: 'Documentation Governance',       category: 'management' },
  { name: 'Content Governance',             category: 'management' },
  { name: 'Content Management',             category: 'management' },
  { name: 'Knowledge Management',           category: 'management' },
  { name: 'Information Architecture',       category: 'management' },
  { name: 'Structured Authoring',           category: 'management' },
  { name: 'Documentation Analytics',        category: 'management' },
  { name: 'CMS / Web CMS',                 category: 'management' },
  { name: 'DITA',                           category: 'management' },

  /* API & Developer Documentation */
  { name: 'REST APIs',                      category: 'api' },
  { name: 'OpenAPI / Swagger',              category: 'api' },
  { name: 'JSON',                           category: 'api' },
  { name: 'Markdown',                       category: 'api' },
  { name: 'Git & GitHub',                  category: 'api' },
  { name: 'Postman',                        category: 'api' },
  { name: 'HTML / XML',                     category: 'api' },
  { name: 'Docs-as-Code',                   category: 'api' },

  /* Documentation Tools & Platforms */
  { name: 'OpenText',                       category: 'tools' },
  { name: 'Adobe RoboHelp',                 category: 'tools' },
  { name: 'Adobe FrameMaker',               category: 'tools' },
  { name: 'Adobe Experience Manager',       category: 'tools' },
  { name: 'Confluence',                     category: 'tools' },
  { name: 'ServiceNow',                     category: 'tools' },
  { name: 'SharePoint',                     category: 'tools' },
  { name: 'Oxygen XML Editor',              category: 'tools' },
  { name: 'Jira',                           category: 'tools' },
  { name: 'Microsoft Visio',                category: 'tools' },
  { name: 'Snagit',                         category: 'tools' },

  /* Learning & Content Development */
  { name: 'Articulate Storyline',           category: 'learning' },
  { name: 'Storyline 360',                  category: 'learning' },
  { name: 'Adobe Captivate',                category: 'learning' },
  { name: 'Adobe Captivate Prime',          category: 'learning' },
  { name: 'Instructional Design',           category: 'learning' },
  { name: 'Microsoft PowerPoint',           category: 'learning' },

  /* Quality, Usability & Practices */
  { name: 'Accessibility',                  category: 'quality' },
  { name: 'Usability',                      category: 'quality' },
  { name: 'American English',               category: 'quality' },
  { name: 'Content Review',                 category: 'quality' },
  { name: 'Documentation Quality',          category: 'quality' },
  { name: 'Agile / SDLC',                  category: 'quality' },
  { name: 'Content Strategy',               category: 'quality' },
  { name: 'Problem Solving',                category: 'quality' },
];

/* =============================================
   PROJECTS — from resume
============================================= */
const projects = [
  {
    title: 'Enterprise SOP Program — Wells Fargo',
    company: 'Wells Fargo',
    icon: '',
    description: 'Author, review, and publish enterprise SOPs and procedural documentation for Corporate Investment Banking and Commercial Real Estate, with peer reviews, stakeholder approvals, and controlled releases in OpenText.',
    longDescription: 'Led comprehensive SOP authoring and publishing for two major business units at Wells Fargo. Managed end-to-end documentation workflows including peer reviews, SME collaborations, compliance team sign-offs, governance checks, and controlled releases. Maintained procedure control identifiers, version tracking, and periodic review schedules to ensure operational compliance and regulatory alignment.',
    tech: ['OpenText', 'SOPs', 'Governance', 'SharePoint', 'Lifecycle Management'],
  },
  {
    title: 'Policy Governance Platform Migration',
    company: 'Wells Fargo',
    icon: '',
    description: 'Contributed to documentation migration and re-platforming initiative — transitioning SOPs from OpenText to the Wells Fargo Policy Governance Platform, including version tracking, procedure control identifiers, and annual review workflows.',
    longDescription: 'Played a key role in a large-scale documentation re-platforming initiative at Wells Fargo. Worked on migrating enterprise SOPs from the legacy OpenText system to the new Wells Fargo Policy Governance Platform. Ensured all metadata, version histories, procedure control identifiers, and review schedules were accurately transferred and validated. Maintained SharePoint-based trackers throughout the full migration lifecycle.',
    tech: ['OpenText', 'Policy Platform', 'Version Control', 'SharePoint', 'Lifecycle Management'],
  },
  {
    title: 'API & DITA Developer Documentation',
    company: 'Cognizant Technology Solutions',
    icon: '',
    description: 'Created and maintained API documentation and DITA-based structured authoring for enterprise applications, using REST APIs, OpenAPI/Swagger, JSON, Markdown, Git, and Docs-as-Code workflows across pharmaceutical and financial services domains.',
    longDescription: 'Developed comprehensive API documentation for enterprise applications at Cognizant. Implemented DITA-based structured authoring workflows and applied developer-focused documentation practices including REST API documentation, OpenAPI/Swagger specification documentation, JSON schema docs, Markdown-based content, and Git-driven Docs-as-Code workflows. Collaborated closely with developer teams to ensure technical accuracy and completeness.',
    tech: ['DITA', 'OpenAPI / Swagger', 'REST APIs', 'Git', 'Markdown', 'JSON', 'Docs-as-Code'],
  },
  {
    title: 'Knowledge Base, AEM & Learning Content',
    company: 'Cognizant Technology Solutions',
    icon: '',
    description: 'Built knowledge base articles, user and administrator guides, QRGs, walkthrough videos, and AEM web content across pharmaceutical, financial services, and digital platform domains using Adobe RoboHelp, Confluence, and ServiceNow.',
    longDescription: 'Delivered a broad portfolio of documentation and learning content at Cognizant across multiple domains. Created knowledge base articles, user guides, administrator guides, Quick Reference Guides (QRGs), walkthrough videos, FAQs, SOPs, and onboarding materials. Managed enterprise web content via Adobe Experience Manager (AEM) and maintained documentation repositories in ServiceNow and Confluence. Designed instructional content using Articulate Storyline and Adobe Captivate for end-user training.',
    tech: ['Adobe RoboHelp', 'Confluence', 'AEM', 'ServiceNow', 'Articulate Storyline', 'Knowledge Base'],
  },
];

/* =============================================
   COUNTRIES
============================================= */
const countries = [
  { flag: '🇮🇳', code: '+91',  name: 'India' },
  { flag: '🇺🇸', code: '+1',   name: 'United States' },
  { flag: '🇬🇧', code: '+44',  name: 'United Kingdom' },
  { flag: '🇨🇦', code: '+1',   name: 'Canada' },
  { flag: '🇦🇺', code: '+61',  name: 'Australia' },
  { flag: '🇸🇬', code: '+65',  name: 'Singapore' },
  { flag: '🇦🇪', code: '+971', name: 'UAE' },
  { flag: '🇩🇪', code: '+49',  name: 'Germany' },
  { flag: '🇫🇷', code: '+33',  name: 'France' },
  { flag: '🇳🇿', code: '+64',  name: 'New Zealand' },
];

/* =============================================
   TYPEWRITER ROLES
============================================= */
const typedRoles = [
  'Technical Writer',
  'Documentation Specialist',
  'Procedure Writer',
  'API Documentation Expert',
  'Content Strategist',
];

/* =============================================
   INIT
============================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =============================================
   THEME — using dark-mode class (same as divyangmishra.github.io)
============================================= */
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle.textContent = isDark ? '◐' : '◑';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

applyTheme(localStorage.getItem('theme') === 'dark');

themeToggle.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('dark-mode'));
});

/* =============================================
   NAVBAR & MOBILE MENU
============================================= */
const navbar     = document.getElementById('navbar');
const menu       = document.getElementById('navbar-menu');
const menuToggle = document.getElementById('mobile-menu-toggle');
const scrollBtn  = document.getElementById('scroll-to-top');

menuToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('active');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.navbar-link, .footer-link, .hero-scroll-indicator').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});

/* =============================================
   SCROLL — navbar glass, active links, scroll-to-top
============================================= */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  scrollBtn.classList.toggle('active', window.scrollY > 400);

  const sections = document.querySelectorAll('section[id]');
  let current = 'home';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* =============================================
   TYPEWRITER
============================================= */
(function typewriter() {
  const el = document.getElementById('typed-text');
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const current = typedRoles[ri];
    el.textContent = current.slice(0, ci);

    if (!deleting && ci < current.length) {
      ci++; setTimeout(tick, 80);
    } else if (!deleting && ci === current.length) {
      deleting = true; setTimeout(tick, 1400);
    } else if (deleting && ci > 0) {
      ci--; setTimeout(tick, 40);
    } else {
      deleting = false;
      ri = (ri + 1) % typedRoles.length;
      setTimeout(tick, 250);
    }
  }
  tick();
})();

/* =============================================
   SKILLS
============================================= */
let activeCategory = 'all';
const categoryWrap = document.getElementById('skill-categories');
const skillsGrid   = document.getElementById('skills-grid');

function renderCategories() {
  categoryWrap.innerHTML = skillCategories.map(cat => `
    <button
      class="category-btn${cat.id === activeCategory ? ' active' : ''}"
      data-category="${cat.id}"
      type="button"
      aria-pressed="${cat.id === activeCategory}"
    >
      <span class="category-icon">${cat.icon}</span>
      <span class="category-label">${cat.label}</span>
    </button>
  `).join('');
}

function renderSkills() {
  const visible = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  skillsGrid.innerHTML = visible.map(skill => `
    <article class="skill-card">
      <h3 class="skill-name">${skill.name}</h3>
    </article>
  `).join('');
}

categoryWrap.addEventListener('click', e => {
  const btn = e.target.closest('.category-btn');
  if (!btn) return;
  activeCategory = btn.dataset.category;
  renderCategories();
  renderSkills();
});

renderCategories();
renderSkills();

/* =============================================
   PROJECTS GRID
============================================= */
const projectsGrid = document.getElementById('projects-grid');

projectsGrid.innerHTML = projects.map((p, i) => `
  <article class="project-card" data-project="${i}" tabindex="0" role="button">
    <div class="project-image-wrapper">
      <div class="project-image-placeholder">
        <span class="project-image-icon">${p.icon}</span>
      </div>
      <div class="project-overlay">
        <button class="project-expand-btn" type="button">View details</button>
      </div>
    </div>
    <div class="project-info">
      <h3 class="project-title">${p.title}</h3>
      <p class="project-description">${p.description}</p>
      <div class="project-technologies">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  </article>
`).join('');

/* =============================================
   PROJECT MODAL
============================================= */
const overlay = document.getElementById('project-modal-overlay');
const modal   = document.getElementById('project-modal');

function openProject(index) {
  const p = projects[index];
  modal.innerHTML = `
    <button class="modal-close-btn" type="button" aria-label="Close">×</button>
    <div class="modal-image-placeholder">
      <span class="modal-image-icon">${p.icon}</span>
    </div>
    <h3 class="modal-title">${p.title}</h3>
    <p style="color:var(--text-secondary);font-size:.9rem;font-weight:600;margin-bottom:1rem;">📍 ${p.company}</p>
    <p class="modal-description">${p.longDescription || p.description}</p>
    <div class="modal-technologies">
      <h4>Technologies &amp; Tools</h4>
      <div class="modal-tech-tags">
        ${p.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

projectsGrid.addEventListener('click', e => {
  const card = e.target.closest('.project-card');
  if (card) openProject(Number(card.dataset.project));
});
projectsGrid.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('.project-card');
    if (card) { e.preventDefault(); openProject(Number(card.dataset.project)); }
  }
});
overlay.addEventListener('click', e => {
  if (e.target === overlay || e.target.classList.contains('modal-close-btn')) closeProject();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProject(); hideSuccess(); }
});

/* =============================================
   COUNTRY CODE SELECTOR
============================================= */
const countryBtn      = document.getElementById('country-code-button');
const countryDropdown = document.getElementById('country-dropdown');
const countryList     = document.getElementById('country-list');
const countrySearch   = document.getElementById('country-search');
let selectedCountry   = countries[0];

function renderCountries(filter = '') {
  const q = filter.toLowerCase();
  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(q) || c.code.includes(q)
  );
  if (!filtered.length) {
    countryList.innerHTML = '<p class="no-results">No results found</p>';
    return;
  }
  countryList.innerHTML = filtered.map(c => `
    <button class="country-option${c.name === selectedCountry.name ? ' selected' : ''}" type="button" data-name="${c.name}">
      <span class="country-flag">${c.flag}</span>
      <span class="country-name">${c.name}</span>
      <span class="country-code">${c.code}</span>
    </button>
  `).join('');
}

function updateCountryBtn() {
  countryBtn.querySelector('.selected-country').innerHTML =
    `<span class="country-flag">${selectedCountry.flag}</span> <span class="country-code">${selectedCountry.code}</span>`;
}

renderCountries();
updateCountryBtn();

countryBtn.addEventListener('click', () => {
  countryDropdown.classList.toggle('active');
  if (countryDropdown.classList.contains('active')) countrySearch.focus();
});

countryList.addEventListener('click', e => {
  const opt = e.target.closest('.country-option');
  if (!opt) return;
  selectedCountry = countries.find(c => c.name === opt.dataset.name) || selectedCountry;
  updateCountryBtn();
  renderCountries();
  countryDropdown.classList.remove('active');
});

countrySearch.addEventListener('input', e => renderCountries(e.target.value));

document.addEventListener('click', e => {
  if (!e.target.closest('.country-code-selector')) {
    countryDropdown.classList.remove('active');
  }
});

/* =============================================
   CHAR COUNT
============================================= */
const messageField = document.getElementById('message');
const charCountEl  = document.getElementById('char-count');
messageField.addEventListener('input', () => {
  charCountEl.textContent = messageField.value.length;
});

/* =============================================
   CONTACT FORM
============================================= */
const form        = document.getElementById('contact-form');
const submitBtn   = document.getElementById('submit-btn');
const formStatus  = document.getElementById('form-status');
const successModal = document.getElementById('success-modal');

function setError(id, msg) {
  const input = document.getElementById(id);
  const errEl = document.querySelector(`[data-error-for="${id}"]`);
  if (input) input.classList.toggle('error', Boolean(msg));
  if (errEl) errEl.textContent = msg || '';
}

function clearErrors() {
  ['name', 'email', 'subject', 'message'].forEach(id => setError(id, ''));
}

function validate() {
  clearErrors();
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  let valid = true;

  if (!name)    { setError('name', 'Please enter your name.'); valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError('email', 'Please enter a valid email address.'); valid = false;
  }
  if (!subject) { setError('subject', 'Please add a subject.'); valid = false; }
  if (message.length < 10) {
    setError('message', 'Message must be at least 10 characters.'); valid = false;
  }
  return valid;
}

/* Success popup */
function showSuccess() {
  successModal.hidden = false;
  requestAnimationFrame(() => successModal.classList.add('active'));
  document.body.style.overflow = 'hidden';
  form.reset();
  charCountEl.textContent = '0';
  clearErrors();
}

function hideSuccess() {
  successModal.classList.remove('active');
  successModal.hidden = true;
  document.body.style.overflow = '';
}

document.getElementById('success-close').addEventListener('click', hideSuccess);
successModal.addEventListener('click', e => {
  if (e.target === successModal) hideSuccess();
});

/* Form submit — sends to ahana.chau99@gmail.com via FormSubmit.co */
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!validate()) return;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span> Sending…';
  formStatus.hidden = true;

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const phone   = `${selectedCountry.code} ${document.getElementById('phone').value.trim()}`.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const payload = {
    name,
    email,
    phone,
    subject,
    message,
    _subject:  `Portfolio contact from ${name}: ${subject}`,
    _template: 'table',
    _captcha:  'false',
    _replyto:  email,
  };

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || data.success === 'false') throw new Error('Send failed');

    showSuccess();
  } catch (_err) {
    /* Fallback: open mail client so message is never lost */
    const mailtoLink = `mailto:${CONTACT_EMAIL}`
      + `?subject=${encodeURIComponent(`Portfolio contact: ${subject}`)}`
      + `&body=${encodeURIComponent(`${message}\n\n---\nFrom: ${name} (${email})\nPhone: ${phone}`)}`;
    window.location.href = mailtoLink;

    formStatus.hidden = false;
    formStatus.className = 'form-status error';
    formStatus.textContent = `Couldn't send automatically — write directly to ${CONTACT_EMAIL}.`;

    showSuccess();
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});
