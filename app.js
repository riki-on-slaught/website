const sitePages = [
  ["home", "Home", ""],
  ["about", "About", "about/"],
  ["experience", "Experience", "experience/"],
  ["skills", "Skills", "skills/"],
  ["portfolio", "Portfolio", "portfolio/"],
  ["certifications", "Certifications", "certifications/"],
  ["education", "Education", "education/"],
  ["contact", "Contact", "contact/"],
];

const socialLinks = [];

const icons = {
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7.1 10a16 16 0 0 0 6 6l1.6-1.9a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.6 1.9Z"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  design: '<path d="m15 5 4 4M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"/><path d="M3 3h7M3 7h3M17 17h4M17 21h4"/>',
  prompt: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1 2.5 2 1-2 1L19 21l-1-2.5-2-1 2-1 1-2.5Z"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || ""}</svg>`;
}

const depth = Number(document.body.dataset.depth || 0);
const prefix = "../".repeat(depth);
const activePage = document.body.dataset.page || "";
const header = document.querySelector("#site-header");
const footer = document.querySelector("#site-footer");

if (header) {
  header.innerHTML = `
    <header class="site-header">
      <div class="nav-shell">
        <a class="brand" href="${prefix}" aria-label="Sharad Chandra Shrestha home">
          <span class="brand-mark">S</span><span class="brand-name">Sharad Chandra Shrestha<span>CREATIVE PROFESSIONAL</span></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">${icon("menu")}</button>
        <nav class="main-nav" id="primary-navigation" aria-label="Main navigation">
          ${sitePages.map(([id, label, path]) => `<a href="${prefix}${path}"${activePage === id ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <a class="nav-cv" href="${prefix}assets/Sharad_Chandra_Shrestha_CV.pdf" download>${icon("download")} Download CV</a>
        </div>
      </div>
    </header>`;

  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".main-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    toggle.innerHTML = icon(open ? "close" : "menu");
  });
  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.innerHTML = icon("menu");
    }
  });
}

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand-col">
          <a class="footer-brand" href="${prefix}">Sharad Chandra Shrestha<i>.</i></a>
          <p class="footer-tagline">Creativity meets precision.<br>Innovation meets passion.</p>
          <span class="footer-location">Lalitpur, Nepal</span>
        </div>
        <div class="footer-col">
          <h2>Explore</h2>
          <nav class="footer-links" aria-label="Footer navigation">
            ${sitePages.slice(0, 7).map(([, label, path]) => `<a href="${prefix}${path}">${label}</a>`).join("")}
            <a href="${prefix}contact/">Contact</a>
          </nav>
        </div>
        <div class="footer-col footer-contact-col">
          <h2>Say hello</h2>
          <div class="footer-contact">
            <a href="mailto:sharad.ch.stha2002@gmail.com">sharad.ch.stha2002@gmail.com</a>
            <a href="tel:+9779819773301">+977 9819773301</a>
            ${socialLinks.length ? `<div class="social-links">${socialLinks.map(({ label, href }) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join("")}</div>` : '<span class="social-placeholder">Social links can be added when profile URLs are available.</span>'}
          </div>
        </div>
      </div>
      <div class="container footer-bottom"><span>© ${new Date().getFullYear()} Sharad Chandra Shrestha</span><span>Made with care in Nepal · <a href="${prefix}assets/Sharad_Chandra_Shrestha_CV.pdf" target="_blank" rel="noopener">View CV ↗</a></span></div>
    </footer>`;
}

document.querySelector("main")?.classList.add("page-transition");

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  revealItems.forEach((element) => observer.observe(element));
} else {
  revealItems.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.querySelectorAll(".portfolio-card").forEach((card) => {
      const visible = selected === "all" || card.dataset.category === selected;
      card.hidden = !visible;
      if (visible) {
        card.classList.remove("filter-reveal");
        requestAnimationFrame(() => card.classList.add("filter-reveal"));
      }
    });
  });
});
