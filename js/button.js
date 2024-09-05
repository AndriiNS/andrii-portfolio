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
