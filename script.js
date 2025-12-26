// ============= LOAD AOS DARI JS =============
const aosCSS = document.createElement("link");
aosCSS.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
aosCSS.rel = "stylesheet";
document.head.appendChild(aosCSS);

const aosScript = document.createElement("script");
aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
aosScript.onload = function () {
  AOS.init({
    duration: 1200, // durasi animasi
    offset: 200, // jarak scroll sebelum animasi mulai
    easing: "ease-out-back", // gaya gerakan halus
    delay: 150,
    once: true, // animasi cuma sekali
  });
};
document.body.appendChild(aosScript);

// ============= SCROLL UNTUK NAVBAR =============
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return; // <-- jaga-jaga kalau elemen gak ada
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============= INISIALISASI PETA LEAFLET =============
document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return; // <-- jaga-jaga kalau belum ada elemen peta

  // Koordinat Pesantren Modern Al Ihsan Baleendah
  const pesantren = [-7.467965, 107.623891];

  // Buat peta
  const map = L.map("map").setView(pesantren, 17);

  // Tambahkan layer OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Tambahkan marker
  const marker = L.marker(pesantren).addTo(map);

  // Popup info
  marker
    .bindPopup(
      `
    <div style="text-align:center;">
      <h3 style="margin-bottom:4px;color:#FFD700;">Modern Pondok Pesantren Al Ihsan</h3>
      <p style="color:#333;margin:0;">Baleendah, Bandung, Jawa Barat</p>
    </div>
  `
    )
    .openPopup();
});

// === NAVBAR SCROLL EFFECT ===
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// === HAMBURGER TOGGLE & DYNAMIC MENU ===
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    // 1. Clone existing links to avoid HTML duplication
    const existingLinks = document.querySelectorAll('.nav-links a');
    const mobileList = document.createElement('ul');
    mobileList.className = 'mobile-nav-list';

    existingLinks.forEach((link, index) => {
      const li = document.createElement('li');
      const clonedLink = link.cloneNode(true);

      // Add animation delay for staggering effect
      clonedLink.style.transitionDelay = `${0.1 + (index * 0.1)}s`;

      // Close menu when a link is clicked
      clonedLink.addEventListener('click', () => {
        closeMenu();
      });

      li.appendChild(clonedLink);
      mobileList.appendChild(li);
    });

    navMenu.appendChild(mobileList);

    // 2. Toggle Logic
    function toggleMenu() {
      const isActive = menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Update ARIA
      menuToggle.setAttribute("aria-expanded", isActive);
      navMenu.setAttribute("aria-hidden", !isActive);

      // Prevent body scroll
      document.body.style.overflow = isActive ? 'hidden' : '';
    }

    function closeMenu() {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      navMenu.setAttribute("aria-hidden", "true");
      document.body.style.overflow = '';
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }
});

