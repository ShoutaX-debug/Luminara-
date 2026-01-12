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
  if (mapContainer) {
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
  }

  // === FORM SUBMISSION HANDLING (Palette Micro-UX) ===
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector("button[type='submit']");
      const originalText = btn.innerText;

      // Loading State
      btn.innerText = "Mengirim...";
      btn.disabled = true;
      btn.style.opacity = "0.7";
      btn.style.cursor = "wait";

      // Simulate network request
      setTimeout(() => {
        // Success State
        btn.innerHTML = "Terkirim! <i class='fas fa-check'></i>";
        btn.style.opacity = "1";
        btn.style.cursor = "default";
        contactForm.reset();

        // Reset button after delay
        setTimeout(() => {
          btn.innerText = originalText;
          btn.disabled = false;
          btn.style.cursor = "pointer";
        }, 3000);
      }, 1500);
    });
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
