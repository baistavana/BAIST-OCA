// BAIST Odisha Computer Academy interactions
const WHATSAPP_NUMBER = "917077335811";
const DEFAULT_MESSAGE = "Hello BAIST Odisha Computer Academy, I would like to know more about your computer courses, fees, duration, and admission process.";
const MAPS_QUERY = "Near Avana College, Avana, Bahanaga, Baleshwar, Odisha 756051";
function whatsappUrl(message) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
document.querySelectorAll("[data-whatsapp]").forEach(link => { link.href = whatsappUrl(DEFAULT_MESSAGE); link.target = "_blank"; link.rel = "noopener"; });
document.querySelectorAll("[data-maps]").forEach(link => { link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`; });
document.querySelectorAll("[data-course]").forEach(link => {
  const course = link.dataset.course;
  link.href = whatsappUrl(`Hello BAIST Odisha Computer Academy, I would like to ask about ${course}. Please confirm current availability, syllabus, duration, eligibility, fees, and admission details.`);
  link.target = "_blank"; link.rel = "noopener";
});
const toggle = document.querySelector(".menubtn"), nav = document.querySelector("#nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open");
  }));
}
const year = document.querySelector("#year"); if (year) year.textContent = new Date().getFullYear();


// ========================================================
// BAIST OCA ADMISSION ENQUIRY POPUP LOGIC
// ========================================================
const GOOGLE_FORM_URL = "https://forms.gle/d61p3R3VDD7raMpv9";

function openEnquiryModal() {
  const modal = document.getElementById("enquiryModal");
  const iframe = document.getElementById("enquiryIframe");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // freeze background scroll
    if (iframe && (!iframe.src || iframe.src === "about:blank")) {
      iframe.src = GOOGLE_FORM_URL;
    }
  }
}

function closeEnquiryModal() {
  const modal = document.getElementById("enquiryModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // restore scroll
  }
}

function handleOverlayClick(event) {
  if (event.target.id === "enquiryModal") {
    closeEnquiryModal();
  }
}

window.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeEnquiryModal();
  }
});

// Auto-trigger the pop-up highlight when visitor opens the website (after 1.2 seconds)
window.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    openEnquiryModal();
  }, 1200);
});
