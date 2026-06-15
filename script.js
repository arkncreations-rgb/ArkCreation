const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const icons = {
  menu: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  sun: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  moon: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><path d="M20 14.7A8.5 8.5 0 0 1 9.3 4 7 7 0 1 0 20 14.7Z"/></svg>',
  search: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><path d="m18 15-6-6-6 6"/></svg>',
  web: '<svg viewBox="0 0 24 24" class="h-full w-full fill-none stroke-current stroke-2"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M8 4v5"/></svg>',
  design: '<svg viewBox="0 0 24 24" class="h-full w-full fill-none stroke-current stroke-2"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m12 12 8-4.5M12 12v9M12 12 4 7.5"/></svg>',
  brand: '<svg viewBox="0 0 24 24" class="h-full w-full fill-none stroke-current stroke-2"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
  seo: '<svg viewBox="0 0 24 24" class="h-full w-full fill-none stroke-current stroke-2"><path d="M4 19V5M4 19h16"/><path d="m7 15 4-5 4 3 4-7"/></svg>',
  video: '<svg viewBox="0 0 24 24" class="h-full w-full fill-none stroke-current stroke-2"><rect x="3" y="5" width="14" height="14" rx="3"/><path d="m17 9 4-2v10l-4-2"/></svg>',
  social: '<svg viewBox="0 0 24 24" class="h-full w-full fill-none stroke-current stroke-2"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="m8.6 10.6 6.8-3.2M8.6 13.4l6.8 3.2"/></svg>',
  target: '<svg viewBox="0 0 24 24" class="h-full w-full fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  spark: '<svg viewBox="0 0 24 24" class="h-full w-full fill-none stroke-current stroke-2"><path d="M13 2 4 14h8l-1 8 9-12h-8l1-8Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  link: '<svg viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-current stroke-2"><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1"/></svg>',
  check: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><path d="m20 6-11 11-5-5"/></svg>',
  star: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z"/></svg>'
};

const services = [
  { title: 'Web Development', icon: 'web', description: 'Fast, accessible, conversion-focused websites and web apps built with scalable front-end architecture.', details: 'We plan, design, and develop responsive websites, landing pages, CMS-ready builds, and product interfaces with clean code, performance budgets, SEO foundations, analytics events, and maintainable component patterns.' },
  { title: 'UI/UX Design', icon: 'design', description: 'Research-led user flows, wireframes, prototypes, and polished interface systems.', details: 'From discovery workshops to clickable prototypes, we shape intuitive experiences that reduce friction, clarify product value, and give teams reusable design systems for future releases.' },
  { title: 'Branding', icon: 'brand', description: 'Identity systems, logo direction, brand voice, and launch-ready creative assets.', details: 'We create positioning, visual identity, typography, color systems, social templates, pitch decks, and brand usage rules that make your business recognizable across every channel.' },
  { title: 'SEO Optimization', icon: 'seo', description: 'Technical SEO, content structure, speed, schema, and search growth roadmaps.', details: 'Our SEO work improves crawlability, page performance, keyword alignment, metadata, internal links, and measurement so search becomes a durable acquisition channel.' },
  { title: 'Video Production', icon: 'video', description: 'Edited launch videos, social reels, explainers, motion graphics, and ad creatives.', details: 'We turn raw footage and strategy into sharp video assets with story structure, rhythm, color, captions, platform variants, and brand-consistent motion design.' },
  { title: 'Social Media Marketing', icon: 'social', description: 'Campaign planning, creative direction, content calendars, and paid media support.', details: 'We design audience-focused campaigns, create platform-native assets, test messages, and optimize performance so your social presence supports real business goals.' }
];

const portfolio = [
  { title: 'Nexa SaaS Launch', category: 'Website', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80', result: '+162% demo requests' },
  { title: 'Luma Identity System', category: 'Branding', image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1000&q=80', result: 'Full brand refresh' },
  { title: 'Orbit Growth Campaign', category: 'Marketing', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80', result: '3.8x ad return' },
  { title: 'Muse Product UI', category: 'Design', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80', result: 'Design system' },
  { title: 'Studio Commerce', category: 'Website', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80', result: '+41% checkout lift' },
  { title: 'Signal Social Kit', category: 'Marketing', image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1000&q=80', result: '90-day campaign' }
];

const team = [
  { name: 'Avery Quinn', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80' },
  { name: 'Milo Chen', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80' },
  { name: 'Sofia Patel', role: 'UX Strategist', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80' },
  { name: 'Noah Ellis', role: 'Growth Marketer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80' }
];

const testimonials = [
  { name: 'Maya Robinson', role: 'Founder, Harbor Studio', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', quote: 'Ark Creations transformed our scattered ideas into a premium brand and website that finally matches the quality of our work.' },
  { name: 'Daniel Kim', role: 'CMO, Velora', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', quote: 'The team moved quickly, challenged our assumptions, and delivered a campaign system that made reporting and optimization much easier.' },
  { name: 'Elena Torres', role: 'Product Lead, BrightPath', rating: 5, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', quote: 'Their UX work helped us simplify a complex product without losing depth. The handoff was clean and engineering-friendly.' }
];

const blogs = [
  { title: 'Design Systems That Do Not Slow Teams Down', category: 'Design', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80', excerpt: 'How to create reusable interface rules that keep brand expression flexible.' },
  { title: 'What High-Converting Landing Pages Have in Common', category: 'Growth', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80', excerpt: 'A practical look at structure, trust, speed, and message sequencing.' },
  { title: 'Planning Video Content for a Product Launch', category: 'Video', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80', excerpt: 'Build a content matrix before editing begins to avoid last-minute chaos.' }
];

const plans = [
  { name: 'Starter', monthly: 799, yearly: 7990, features: ['Landing page strategy', 'Responsive website', 'Basic SEO setup', 'Launch support'] },
  { name: 'Professional', monthly: 1799, yearly: 17990, recommended: true, features: ['Multi-page website', 'UI/UX design system', 'Brand asset kit', 'Analytics dashboard', 'Priority support'] },
  { name: 'Enterprise', monthly: 3999, yearly: 39990, features: ['Full digital strategy', 'Custom development', 'Campaign creative', 'Video production', 'Dedicated team pod'] }
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'Most focused websites launch in 3 to 6 weeks. Larger brand, product, or campaign systems are planned in phases so useful work ships early.' },
  { q: 'Can Ark Creations work with an existing brand?', a: 'Yes. We can extend your current identity, improve weak points, and build digital assets that respect what your audience already recognizes.' },
  { q: 'Do you provide ongoing marketing support?', a: 'Yes. We support retainers for SEO, social campaigns, landing page testing, reporting, and creative production.' },
  { q: 'Will the website be mobile-first and accessible?', a: 'Yes. Responsive layout, keyboard access, semantic HTML, readable contrast, and performance are part of our default delivery checklist.' }
];

const timeline = [
  ['Discover', 'Business goals, audience needs, competitive context, and success metrics.'],
  ['Shape', 'Information architecture, creative direction, messaging, and production priorities.'],
  ['Build', 'Design, development, content, motion, analytics, and quality assurance.'],
  ['Grow', 'Launch support, optimization, reporting, and iteration based on real behavior.']
];

let activeTestimonial = 0;
let yearly = false;

function icon(name, extra = '') {
  return `<span class="${extra}">${icons[name] || icons.spark}</span>`;
}

function setIcons() {
  $('[data-icon="target"]').innerHTML = icons.target;
  $('[data-icon="spark"]').innerHTML = icons.spark;
  $$('.contact-line').forEach((item) => item.insertAdjacentHTML('afterbegin', icon(item.dataset.icon, 'text-mint')));
  $('#menuToggle').innerHTML = icons.menu;
  $('#searchToggle').innerHTML = icons.search;
  $('#searchClose').innerHTML = icons.close;
  $('#modalClose').innerHTML = icons.close;
  $('#lightboxClose').innerHTML = icons.close;
  $('#backToTop').innerHTML = icons.arrowUp;
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('ark-theme', theme);
  $('#themeToggle').innerHTML = isDark ? icons.sun : icons.moon;
}

function initTheme() {
  const saved = localStorage.getItem('ark-theme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved || preferred);
  $('#themeToggle').addEventListener('click', () => applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark'));
}

function renderServices() {
  $('#servicesGrid').innerHTML = services.map((service, index) => `
    <article class="service-card reveal p-6" style="transition-delay:${index * 45}ms">
      <div class="mb-5 h-14 w-14 rounded-2xl bg-slate-100 p-3 text-mint dark:bg-slate-800">${icons[service.icon]}</div>
      <h3 class="mb-3 text-xl font-black">${service.title}</h3>
      <p class="mb-5 leading-7 text-slate-600 dark:text-slate-300">${service.description}</p>
      <button class="read-service inline-flex items-center gap-2 font-black text-mint" data-index="${index}" type="button">Read More ${icons.link}</button>
    </article>
  `).join('');
}

function renderPortfolio(filter = 'All') {
  const items = filter === 'All' ? portfolio : portfolio.filter((item) => item.category === filter);
  $('#portfolioGrid').innerHTML = items.map((item) => `
    <article class="portfolio-card reveal group overflow-hidden">
      <button class="lightbox-trigger block w-full text-left" type="button" data-image="${item.image}" data-title="${item.title}">
        <div class="relative aspect-[4/3] overflow-hidden">
          <img class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="${item.image}" alt="${item.title} project preview" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-90"></div>
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <span class="rounded-full bg-white/15 px-3 py-1 text-xs font-black backdrop-blur">${item.category}</span>
            <h3 class="mt-3 text-xl font-black">${item.title}</h3>
            <p class="text-sm text-slate-200">${item.result}</p>
          </div>
        </div>
      </button>
    </article>
  `).join('');
  observeReveals();
}

function renderPortfolioFilters() {
  const filters = ['All', 'Website', 'Branding', 'Marketing', 'Design'];
  $('#portfolioFilters').innerHTML = filters.map((filter) => `<button class="filter-btn ${filter === 'All' ? 'active' : ''}" type="button" data-filter="${filter}">${filter}</button>`).join('');
}

function renderTimeline() {
  $('#timeline').innerHTML = timeline.map(([title, text], index) => `
    <div class="reveal flex gap-4">
      <div class="flex flex-col items-center">
        <span class="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-slate-950">${index + 1}</span>
        ${index < timeline.length - 1 ? '<span class="h-full min-h-12 w-px bg-white/20"></span>' : ''}
      </div>
      <div class="pb-6">
        <h3 class="text-xl font-black">${title}</h3>
        <p class="mt-2 leading-7 text-slate-300">${text}</p>
      </div>
    </div>
  `).join('');
}

function renderTeam() {
  $('#teamGrid').innerHTML = team.map((member) => `
    <article class="team-card reveal overflow-hidden">
      <div class="aspect-[4/4] overflow-hidden">
        <img class="h-full w-full object-cover transition duration-500 hover:scale-105" src="${member.image}" alt="${member.name}" loading="lazy">
      </div>
      <div class="p-5">
        <h3 class="text-xl font-black">${member.name}</h3>
        <p class="mt-1 text-sm font-bold text-mint">${member.role}</p>
        <div class="mt-4 flex gap-2">
          ${['in', 'x', 'dr'].map((item) => `<a class="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xs font-black transition hover:bg-mint hover:text-slate-950 dark:bg-slate-800" href="#" aria-label="${member.name} social profile">${item}</a>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function renderTestimonials() {
  $('#testimonialTrack').innerHTML = testimonials.map((item) => `
    <article class="min-w-full p-7 text-center sm:p-10">
      <img class="mx-auto h-20 w-20 rounded-full object-cover" src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="mt-5 flex justify-center gap-1 text-amber">${Array.from({ length: item.rating }).map(() => icons.star).join('')}</div>
      <p class="mx-auto mt-6 max-w-2xl text-xl font-semibold leading-9 text-slate-700 dark:text-slate-200">"${item.quote}"</p>
      <h3 class="mt-6 text-lg font-black">${item.name}</h3>
      <p class="text-sm font-bold text-slate-500 dark:text-slate-400">${item.role}</p>
    </article>
  `).join('');
  $('#testimonialDots').innerHTML = testimonials.map((_, index) => `<button class="h-2.5 w-2.5 rounded-full bg-slate-300 transition dark:bg-slate-700" type="button" aria-label="Show testimonial ${index + 1}" data-testimonial="${index}"></button>`).join('');
  updateTestimonial();
}

function updateTestimonial() {
  $('#testimonialTrack').style.transform = `translateX(-${activeTestimonial * 100}%)`;
  $$('#testimonialDots button').forEach((dot, index) => {
    dot.classList.toggle('!w-8', index === activeTestimonial);
    dot.classList.toggle('!bg-mint', index === activeTestimonial);
  });
}

function renderBlogs() {
  $('#blogGrid').innerHTML = blogs.map((post, index) => `
    <article class="blog-card reveal overflow-hidden">
      <img class="aspect-[16/10] w-full object-cover" src="${post.image}" alt="${post.title}" loading="lazy">
      <div class="p-6">
        <span class="rounded-full bg-coral/10 px-3 py-1 text-xs font-black text-coral">${post.category}</span>
        <h3 class="mt-4 text-xl font-black">${post.title}</h3>
        <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">${post.excerpt}</p>
        <button class="read-blog mt-5 font-black text-mint" data-index="${index}" type="button">Read More</button>
      </div>
    </article>
  `).join('');
}

function renderPricing() {
  $('#pricingGrid').innerHTML = plans.map((plan) => {
    const price = yearly ? plan.yearly : plan.monthly;
    return `
      <article class="price-card reveal relative p-6 ${plan.recommended ? 'border-mint ring-4 ring-mint/10' : ''}">
        ${plan.recommended ? '<span class="absolute right-5 top-5 rounded-full bg-mint px-3 py-1 text-xs font-black text-slate-950">Recommended</span>' : ''}
        <h3 class="text-2xl font-black">${plan.name}</h3>
        <p class="mt-4 flex items-end gap-2"><span class="text-5xl font-black">$${price.toLocaleString()}</span><span class="pb-2 text-slate-500 dark:text-slate-400">/${yearly ? 'year' : 'mo'}</span></p>
        <ul class="mt-6 space-y-3">${plan.features.map((feature) => `<li class="flex gap-3 text-slate-600 dark:text-slate-300"><span class="text-mint">${icons.check}</span><span>${feature}</span></li>`).join('')}</ul>
        <a href="#contact" class="btn-primary mt-7 w-full">Choose ${plan.name}</a>
      </article>
    `;
  }).join('');
  observeReveals();
}

function renderFaqs() {
  $('#faqList').innerHTML = faqs.map((faq, index) => `
    <article class="faq-item reveal overflow-hidden">
      <button class="faq-question flex w-full items-center justify-between gap-4 p-5 text-left font-black" type="button" aria-expanded="false" data-faq="${index}">
        <span>${faq.q}</span><span class="text-mint">+</span>
      </button>
      <div class="faq-answer hidden px-5 pb-5 leading-7 text-slate-600 dark:text-slate-300">${faq.a}</div>
    </article>
  `).join('');
}

function renderSocials() {
  $('#footerSocials').innerHTML = ['LinkedIn', 'Instagram', 'X', 'Dribbble'].map((item) => `<a class="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-black transition hover:bg-mint hover:text-slate-950" href="#" aria-label="${item}">${item.slice(0, 2)}</a>`).join('');
}

function showModal(tag, title, body) {
  $('#modalTag').textContent = tag;
  $('#modalTitle').textContent = title;
  $('#modalBody').innerHTML = body;
  $('#modal').classList.remove('hidden');
  $('#modal').classList.add('flex');
  document.body.classList.add('modal-open');
  $('#modalClose').focus();
}

function closeModal() {
  $('#modal').classList.add('hidden');
  $('#modal').classList.remove('flex');
  document.body.classList.remove('modal-open');
}

function showToast(message, type = 'success') {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.toggle('bg-red-600', type === 'error');
  toast.classList.remove('hidden');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.add('hidden'), 3200);
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateForm(form) {
  let valid = true;
  $$('.field', form).forEach((field) => field.classList.remove('error'));
  ['name', 'phone', 'message'].forEach((id) => {
    const input = $(`#${id}`);
    if (!input.value.trim()) {
      input.closest('.field').classList.add('error');
      valid = false;
    }
  });
  if (!validateEmail($('#email').value.trim())) {
    $('#email').closest('.field').classList.add('error');
    valid = false;
  }
  return valid;
}

function initCounters() {
  const counters = $$('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      const target = Number(entry.target.dataset.count);
      const start = performance.now();
      const duration = 1400;
      entry.target.dataset.done = 'true';
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        entry.target.textContent = Math.floor(target * progress);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.45 });
  counters.forEach((counter) => observer.observe(counter));
}

function observeReveals() {
  if (window.revealObserver) window.revealObserver.disconnect();
  window.revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach((item) => window.revealObserver.observe(item));
}

function initTypedText() {
  const words = ['clarity', 'impact', 'trust', 'momentum'];
  let word = 0;
  setInterval(() => {
    word = (word + 1) % words.length;
    $('#typedText').textContent = words[word];
  }, 1800);
}

function initSearch() {
  const data = [
    ...services.map((item) => ({ title: item.title, type: 'Service', text: item.description, target: '#services' })),
    ...portfolio.map((item) => ({ title: item.title, type: 'Portfolio', text: item.result, target: '#portfolio' })),
    ...blogs.map((item) => ({ title: item.title, type: 'Blog', text: item.excerpt, target: '#blog' }))
  ];
  const renderResults = (query) => {
    const results = data.filter((item) => `${item.title} ${item.type} ${item.text}`.toLowerCase().includes(query.toLowerCase()));
    $('#searchResults').innerHTML = query ? (results.length ? results.map((item) => `
      <a class="block rounded-2xl p-4 transition hover:bg-slate-100 dark:hover:bg-slate-800" href="${item.target}">
        <span class="text-xs font-black uppercase tracking-widest text-mint">${item.type}</span>
        <strong class="mt-1 block">${item.title}</strong>
        <span class="text-sm text-slate-600 dark:text-slate-300">${item.text}</span>
      </a>
    `).join('') : '<p class="p-4 text-slate-500">No results found.</p>') : '<p class="p-4 text-slate-500">Start typing to search the site.</p>';
  };
  $('#searchToggle').addEventListener('click', () => {
    $('#searchOverlay').classList.remove('hidden');
    $('#searchInput').focus();
    renderResults('');
  });
  $('#searchClose').addEventListener('click', () => $('#searchOverlay').classList.add('hidden'));
  $('#searchInput').addEventListener('input', (event) => renderResults(event.target.value));
  $('#searchResults').addEventListener('click', () => $('#searchOverlay').classList.add('hidden'));
}

function initEvents() {
  $('#menuToggle').addEventListener('click', () => {
    const isOpen = !$('#mobileMenu').classList.contains('hidden');
    $('#mobileMenu').classList.toggle('hidden', isOpen);
    $('#menuToggle').innerHTML = isOpen ? icons.menu : icons.close;
    $('#menuToggle').setAttribute('aria-expanded', String(!isOpen));
    document.body.classList.toggle('menu-open', !isOpen);
  });

  $$('.mobile-link').forEach((link) => link.addEventListener('click', () => {
    $('#mobileMenu').classList.add('hidden');
    $('#menuToggle').innerHTML = icons.menu;
    $('#menuToggle').setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));

  $('#servicesGrid').addEventListener('click', (event) => {
    const button = event.target.closest('.read-service');
    if (!button) return;
    const service = services[Number(button.dataset.index)];
    showModal('Service', service.title, `<p>${service.details}</p>`);
  });

  $('#portfolioFilters').addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;
    $$('.filter-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderPortfolio(button.dataset.filter);
  });

  $('#portfolioGrid').addEventListener('click', (event) => {
    const button = event.target.closest('.lightbox-trigger');
    if (!button) return;
    $('#lightboxImage').src = button.dataset.image;
    $('#lightboxImage').alt = `${button.dataset.title} preview`;
    $('#lightbox').classList.remove('hidden');
    $('#lightbox').classList.add('flex');
    document.body.classList.add('modal-open');
  });

  $('#lightboxClose').addEventListener('click', () => {
    $('#lightbox').classList.add('hidden');
    $('#lightbox').classList.remove('flex');
    document.body.classList.remove('modal-open');
  });

  $('#modalClose').addEventListener('click', closeModal);
  $('#modal').addEventListener('click', (event) => {
    if (event.target.id === 'modal') closeModal();
  });

  $('#blogGrid').addEventListener('click', (event) => {
    const button = event.target.closest('.read-blog');
    if (!button) return;
    const post = blogs[Number(button.dataset.index)];
    showModal(post.category, post.title, `<p>${post.excerpt}</p><p class="mt-4">Ark Creations uses this type of thinking to connect brand strategy, creative production, and measurable user outcomes.</p>`);
  });

  $('#testimonialDots').addEventListener('click', (event) => {
    const button = event.target.closest('[data-testimonial]');
    if (!button) return;
    activeTestimonial = Number(button.dataset.testimonial);
    updateTestimonial();
  });

  $('#monthlyBtn').addEventListener('click', () => {
    yearly = false;
    $('#monthlyBtn').classList.add('active');
    $('#yearlyBtn').classList.remove('active');
    renderPricing();
  });

  $('#yearlyBtn').addEventListener('click', () => {
    yearly = true;
    $('#yearlyBtn').classList.add('active');
    $('#monthlyBtn').classList.remove('active');
    renderPricing();
  });

  $('#faqList').addEventListener('click', (event) => {
    const question = event.target.closest('.faq-question');
    if (!question) return;
    const item = question.closest('.faq-item');
    const answer = $('.faq-answer', item);
    const isOpen = !answer.classList.contains('hidden');
    answer.classList.toggle('hidden', isOpen);
    question.setAttribute('aria-expanded', String(!isOpen));
    question.querySelector('span:last-child').textContent = isOpen ? '+' : '-';
  });

  $('#contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateForm(event.currentTarget)) {
      showToast('Please complete all fields with a valid email.', 'error');
      return;
    }
    event.currentTarget.reset();
    showToast('Message sent successfully. We will be in touch soon.');
  });

  $('#newsletterForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.currentTarget.querySelector('input').value.trim();
    if (!validateEmail(email)) {
      showToast('Enter a valid email address.', 'error');
      return;
    }
    event.currentTarget.reset();
    showToast('You are subscribed to Ark insights.');
  });

  $('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      $('#lightbox').classList.add('hidden');
      $('#lightbox').classList.remove('flex');
      $('#searchOverlay').classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
}

function initScrollState() {
  const header = $('#siteHeader');
  const backToTop = $('#backToTop');
  const sections = $$('main section[id]');
  const navLinks = $$('.nav-link');
  window.addEventListener('scroll', () => {
    header.classList.toggle('shadow-soft', window.scrollY > 20);
    backToTop.classList.toggle('hidden', window.scrollY < 700);
    let current = null;
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) current = section;
    });
    navLinks.forEach((link) => link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`));
  }, { passive: true });
}

function initProgressBars() {
  const skills = [
    ['Web Performance', 94],
    ['Brand Strategy', 91],
    ['Campaign Optimization', 88]
  ];
  const aboutPanel = $('#about .panel');
  aboutPanel.insertAdjacentHTML('beforeend', `
    <div class="mt-7 space-y-4">
      ${skills.map(([label, value]) => `
        <div>
          <div class="mb-2 flex justify-between text-sm font-black"><span>${label}</span><span>${value}%</span></div>
          <div class="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><span class="progress-bar block h-full w-0 rounded-full bg-gradient-to-r from-coral to-mint" data-width="${value}%"></span></div>
        </div>
      `).join('')}
    </div>
  `);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.style.width = entry.target.dataset.width;
    });
  }, { threshold: 0.5 });
  $$('.progress-bar').forEach((bar) => observer.observe(bar));
}

function initApp() {
  setIcons();
  initTheme();
  renderServices();
  renderPortfolioFilters();
  renderPortfolio();
  renderTimeline();
  renderTeam();
  renderTestimonials();
  renderBlogs();
  renderPricing();
  renderFaqs();
  renderSocials();
  initEvents();
  initCounters();
  initTypedText();
  initSearch();
  initScrollState();
  initProgressBars();
  observeReveals();
  $('#year').textContent = new Date().getFullYear();
  window.setInterval(() => {
    activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    updateTestimonial();
  }, 5200);
  window.addEventListener('load', () => {
    window.setTimeout(() => $('#loader').classList.add('hidden-loader'), 450);
    window.setTimeout(() => $('#loader').remove(), 1100);
  });
}

document.addEventListener('DOMContentLoaded', initApp);
