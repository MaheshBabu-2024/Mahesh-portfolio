const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
  });
});

const currentPage = document.body.getAttribute("data-page");
if (currentPage) {
  navItems.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === currentPage);
  });
}
