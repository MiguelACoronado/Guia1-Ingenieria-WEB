// Controla la apertura/cierre del menú de navegación en móvil
// y mantiene sincronizado el atributo aria-expanded para lectores de pantalla.
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".primary-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al navegar a una sección (mejora la experiencia en móvil)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
