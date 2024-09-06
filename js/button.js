const buttons = document.querySelectorAll(".andrii__info-btn");

buttons.forEach((button) => {
  button.addEventListener("mousemove", function (e) {
    const rect = button.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    button.style.setProperty("--x", `${startX}px`);
    button.style.setProperty("--y", `${startY}px`);

    button.classList.add("hover");
  });

  button.addEventListener("mouseleave", function () {
    button.classList.remove("hover");
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
