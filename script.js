const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const backdrop = document.querySelector(".nav-backdrop");

function setMenuOpen(open) {
  if (!nav || !burger) return;
  nav.classList.toggle("is-open", open);
  burger.classList.toggle("is-active", open);
  burger.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
  if (backdrop) {
    backdrop.hidden = !open;
    backdrop.setAttribute("aria-hidden", String(!open));
  }
}

if (burger && nav) {
  burger.addEventListener("click", () => {
    setMenuOpen(!nav.classList.contains("is-open"));
  });

  if (backdrop) {
    backdrop.addEventListener("click", () => setMenuOpen(false));
  }

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setMenuOpen(false);
  });
}
