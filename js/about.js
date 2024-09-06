document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordeon-bnt__box");
  const spans = document.querySelectorAll(".accordeon-span");
  const texts = document.querySelectorAll(".accordeon__text");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const text = texts[index];
      const span = spans[index];

      const isOpen = text.style.maxHeight !== "0px" && text.style.maxHeight;

      texts.forEach((text) => (text.style.maxHeight = "0"));
      spans.forEach((span) => span.classList.remove("accordeon-span-purple"));

      if (!isOpen) {
        text.style.maxHeight = text.scrollHeight + "px";
        span.classList.add("accordeon-span-purple");
      }
    });
  });
});
//========================================================================================================================================================
function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".header__menu-mobile");
  const menuIcon = document.querySelector(".nav-icon");
  const body = document.body;

  navBtn.onclick = function () {
    nav.classList.toggle("header__menu-mobile--open");
    menuIcon.classList.toggle("nav-icon--active");
    body.style.overflow = nav.classList.contains("header__menu-mobile--open") ? "hidden" : "";
  };
}
mobileNav();
