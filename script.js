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

// === HAMBURGER TOGGLE ===
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  const isActive = menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isActive);
});

// === FORM HANDLING ===
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;

    const originalText = btn.innerHTML;
    const isArrow = originalText.includes('→');

    btn.disabled = true;
    btn.innerHTML = isArrow ? '...' : 'Mengirim...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
      btn.innerHTML = isArrow ? '✓' : 'Terkirim!';
      btn.style.background = '#4CAF50';
      btn.style.borderColor = '#4CAF50';
      if (!isArrow) btn.style.color = '#fff';

      form.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        btn.style.opacity = '';
        btn.style.background = '';
        btn.style.borderColor = '';
        if (!isArrow) btn.style.color = '';
      }, 2000);
    }, 1500);
  });
});
