// BAIST Odisha Computer Academy website interactions
// Official WhatsApp number supplied by the academy: 7077335811 (India country code +91)
const WHATSAPP_NUMBER = "917077335811";
const DEFAULT_MESSAGE = "Hello BAIST Odisha Computer Academy, I would like to know more about your computer courses, fees, duration, and admission process.";
const MAPS_QUERY = "Near Avana College, Avana, Bahanaga, Baleshwar, Odisha 756051";

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl(DEFAULT_MESSAGE);
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-maps]").forEach((link) => {
  link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
});

document.querySelectorAll("[data-course]").forEach((link) => {
  const course = link.dataset.course;
  link.href = whatsappUrl(`Hello BAIST Odisha Computer Academy, I would like to ask about ${course}. Please confirm current availability, syllabus, duration, eligibility, fees, and admission details.`);
  link.target = "_blank";
  link.rel = "noopener";
});

const toggle = document.querySelector(".menubtn");
const nav = document.querySelector("#nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
