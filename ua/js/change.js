const langSwitcher = document.querySelector(".header__change-lenguage");

langSwitcher.addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    this.classList.toggle("active");
  }
});

const choices = document.querySelectorAll(".header__change-other span");

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const selectedLang = this.textContent;
    document.querySelector(".header__change-choise").textContent = selectedLang;
    langSwitcher.classList.remove("active");
    window.location = "./../index.html";
  });
});
