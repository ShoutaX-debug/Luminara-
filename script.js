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

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isActive = menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isActive);
  });
}

// === FORM HANDLING ===
document.addEventListener('DOMContentLoaded', () => {
  // Contact Form
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('.btn-send');
      const originalText = btn.innerText;

      btn.innerText = 'Mengirim...';
      btn.disabled = true;
      btn.style.opacity = '0.7';
      btn.style.cursor = 'not-allowed';

      setTimeout(() => {
        btn.innerText = 'Terkirim!';
        btn.style.background = '#fff';
        btn.style.color = '#000';

        contactForm.reset();

        setTimeout(() => {
          btn.innerText = originalText;
          btn.disabled = false;
          btn.style.opacity = '1';
          btn.style.background = ''; // Revert to CSS
          btn.style.color = '';
          btn.style.cursor = 'pointer';
        }, 3000);
      }, 1500);
    });
  }

  // Subscribe Form
  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('button');
      const originalText = btn.innerText;

      // Spinner or just change icon
      btn.innerText = '...';
      btn.disabled = true;
      btn.style.cursor = 'not-allowed';

      setTimeout(() => {
        btn.innerHTML = '✓'; // Checkmark
        btn.style.color = '#fff'; // White checkmark

        subscribeForm.reset();

        setTimeout(() => {
          btn.innerText = originalText;
          btn.disabled = false;
          btn.style.color = ''; // Revert to CSS
          btn.style.cursor = 'pointer';
        }, 3000);
      }, 1500);
    });
  }
});
