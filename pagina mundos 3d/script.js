// Menú hamburguesa
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  const burger = document.getElementById("hamburgerBtn");
  nav.classList.toggle("show");
  burger.classList.toggle("active");
}

// Mostrar sección
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));
  const selected = document.getElementById(sectionId);
  if(selected) selected.classList.add("active");

  // Cerrar menú
  const nav = document.getElementById("navMenu");
  const burger = document.getElementById("hamburgerBtn");
  nav.classList.remove("show");
  burger.classList.remove("active");

  resizeMasonryImages();
}

// Ajustar altura y aplicar tamaños aleatorios
function resizeMasonryImages() {
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach(gallery => {
    const rowHeight = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(gallery).getPropertyValue('gap'));
    gallery.querySelectorAll('.gallery-item').forEach(item => {
      item.style.gridRowEnd = `span ${Math.ceil((item.querySelector('img').getBoundingClientRect().height + rowGap)/(rowHeight+rowGap))}`;
    });
  });
}

document.getElementById("hamburgerBtn").addEventListener("click", toggleMenu);
document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const sec = a.getAttribute("data-section");
    showSection(sec);
  });
});
window.addEventListener("load", resizeMasonryImages);
window.addEventListener("resize", resizeMasonryImages);
