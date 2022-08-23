//Part 1
const numberOfCharactersElement = document.querySelector(
  ".password__characters-span"
);

const rangeInputElement = document.querySelector(
  ".password__characters-range-input"
);

numberOfCharactersElement.textContent = rangeInputElement.value;

rangeInputElement.addEventListener("input", getInputValue);

function getInputValue(e) {
  let valueOfInput = e.target.value;
  numberOfCharactersElement.textContent = valueOfInput;
}

//Part 2
const textInputElement = document.querySelector(".password__generated-text");

const copyButton = document.querySelector(".password__generated-copy");

copyButton.addEventListener("click", copyPasswordToClipboard);

function copyPasswordToClipboard() {
  if (textInputElement.value === "") {
    alert("Please generate a password!");
    return;
  }
  textInputElement.select();

  textInputElement.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textInputElement.value);

  alert(`The password ${textInputElement.value} has been SUCCESSFULLY copied!`);
}

//Part 3

//Part 4

//Part 5

//Part 6

//Part 7

//Part 8
