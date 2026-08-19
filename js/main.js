/* ===== IVN TECH – Main Website JS ===== */

// --- Data ---
const SERVICES = [
  { title: "Electrical Wiring", icon: "zap", items: ["House wiring", "Commercial electrical work", "Lighting installation", "Electrical repairs and maintenance"] },
  { title: "CCTV Camera Installation", icon: "camera", items: ["CCTV camera supply and installation", "Camera cabling", "DVR/NVR setup", "Security monitoring solutions", "CCTV maintenance"] },
  { title: "Networking Solutions", icon: "network", items: ["Network cabling", "LAN installation", "Router and switch setup", "Network maintenance"] },
  { title: "Plumbing Services", icon: "droplets", items: ["Water pipe installation", "Plumbing repairs", "Drainage work", "Bathroom and water-system work"] },
  { title: "Construction & Civil Works", icon: "building", items: ["Building-related works", "Repair and renovation", "Masonry work", "General construction support"] },
  { title: "Ceiling Works", icon: "panel", items: ["Ceiling installation", "Ceiling repair", "Finishing works"] },
  { title: "Maintenance Services", icon: "wrench", items: ["Electrical maintenance", "CCTV maintenance", "Plumbing maintenance", "General property maintenance"] },
  { title: "Technical Support", icon: "headphones", items: ["Troubleshooting", "Equipment support", "Site technical assistance", "General technical services"] },
];

const ICONS = {
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  droplets: '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 14.69c1.56 0 2.83-1.29 2.83-2.88 0-.82-.4-1.6-1.21-2.26-.82-.67-1.36-1.49-1.56-2.25-.2.76-.75 1.58-1.56 2.25-.82.66-1.21 1.44-1.21 2.26 0 1.59 1.27 2.88 2.83 2.88z"/><path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z"/>',
  building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  panel: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
};

function svg(name, size = 24) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.zap}</svg>`;
}

const PROJECTS = [
  { name: "Residential Projects", img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&h=450&fit=crop" },
  { name: "Commercial Projects", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop" },
  { name: "Electrical Projects", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=450&fit=crop" },
  { name: "CCTV Projects", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=450&fit=crop" },
  { name: "Plumbing Projects", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=450&fit=crop" },
  { name: "Construction Projects", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop" },
  { name: "Ceiling Projects", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=450&fit=crop" },
];

const TESTIMONIALS = [
  { name: "Customer", text: "Professional service, quality workmanship and excellent customer support." },
  { name: "Customer", text: "Very reliable team. They completed our electrical work on time and within budget." },
  { name: "Customer", text: "Great CCTV installation service. The team was knowledgeable and professional." },
];

// --- Render Services ---
const servicesGrid = document.getElementById("servicesGrid");
if (servicesGrid) {
  servicesGrid.innerHTML = SERVICES.map(s => `
    <div class="service-card">
      <div class="service-icon">${svg(s.icon)}</div>
      <h3>${s.title}</h3>
      <ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");
}

// --- Render Projects ---
const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
  projectsGrid.innerHTML = PROJECTS.map(p => `
    <div class="project-card">
      <div class="project-thumb">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="info">
        <h3>${p.name}</h3>
        <p class="tag">Completed by IVN TECH</p>
      </div>
    </div>
  `).join("");
}

// --- Testimonials ---
let testIdx = 0;
const testText = document.getElementById("testimonialText");
const testAuthor = document.getElementById("testimonialAuthor");
const testDots = document.getElementById("testimonialDots");

function showTestimonial(i) {
  testIdx = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
  const t = TESTIMONIALS[testIdx];
  if (testText) testText.textContent = `"${t.text}"`;
  if (testAuthor) testAuthor.textContent = `— ${t.name}`;
  if (testDots) {
    testDots.querySelectorAll("span").forEach((d, j) => d.classList.toggle("active", j === testIdx));
  }
}

if (testDots) {
  testDots.innerHTML = TESTIMONIALS.map((_, i) => `<span class="${i === 0 ? "active" : ""}"></span>`).join("");
  testDots.querySelectorAll("span").forEach((d, i) => d.addEventListener("click", () => showTestimonial(i)));
}
showTestimonial(0);

const prevBtn = document.getElementById("prevTest");
const nextBtn = document.getElementById("nextTest");
if (prevBtn) prevBtn.addEventListener("click", () => showTestimonial(testIdx - 1));
if (nextBtn) nextBtn.addEventListener("click", () => showTestimonial(testIdx + 1));

// --- Hamburger ---
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => mobileMenu.classList.toggle("active"));
  mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("active")));
}

// --- Contact Form ---
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("contactSuccess").classList.add("show");
    contactForm.reset();
    setTimeout(() => document.getElementById("contactSuccess").classList.remove("show"), 3000);
  });
}
