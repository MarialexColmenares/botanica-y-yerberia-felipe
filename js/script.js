const modalButtons = [
  { open: "abrir-modal-con", modal: "modal-con", close: "cerrar-modal-con" },
  { open: "abrir-modal-der", modal: "modal-der", close: "cerrar-modal-der" },
  { open: "abrir-modal-adm", modal: "modal-adm", close: "cerrar-modal-adm" },
];

modalButtons.forEach(({ open, modal, close }) => {
  const btnOpen = document.getElementById(open);
  const dialog = document.getElementById(modal);
  const btnClose = document.getElementById(close);
  if (!btnOpen || !dialog || !btnClose) return;
  btnOpen.addEventListener("click", () => dialog.showModal());
  btnClose.addEventListener("click", () => dialog.close());
});

// Navbar hamburguesa: toggle menú en pantallas pequeñas
function initHamburgerMenu() {
  const toggles = document.querySelectorAll(".navbar-toggle");
  toggles.forEach((btn) => {
    const nav = btn.closest(".navbar");
    if (!nav) return;
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  // Cerrar menú al hacer click en un enlace
  document.querySelectorAll(".navbar-list a").forEach((a) => {
    a.addEventListener("click", () => {
      const nav = a.closest(".navbar");
      if (nav) nav.classList.remove("open");
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHamburgerMenu);
} else {
  initHamburgerMenu();
}
