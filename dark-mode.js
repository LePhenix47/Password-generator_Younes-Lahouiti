const body = document.body;

const themeButtons = document.querySelectorAll(".theme__buttons>*");

const lightThemeButton = themeButtons[0];

const darkThemeButton = themeButtons[1];

lightThemeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.replace("dark-mode", "light-mode");
  } else {
    body.classList.add("light-mode");
  }
});

darkThemeButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
});
