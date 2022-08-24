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

//Returns a number in a secured way between the minimum value and maximum value inputted
function getRandomNumber(min, max) {
  const unsignedIntegersArray = new Uint32Array(1); //Gives us an array of numbers of length 1 between 0 and 2³² (4 294 967 295)
  let randomNumber = crypto.getRandomValues(unsignedIntegersArray)[0];
  const max32BitsNumber = 4294967296;
  randomNumber = randomNumber / max32BitsNumber;

  return Math.trunc(randomNumber * (max - min + 1)) + min;
}

//Part 4
const characterSets = {
  lowercase: addCharactersRange(97, 123),
  uppercase: addCharactersRange(65, 91),
  symbols:
    addCharactersRange(33, 48) +
    addCharactersRange(58, 64) +
    addCharactersRange(91, 96) +
    addCharactersRange(123, 126),
  numbers: addCharactersRange(48, 58),
};
console.log(characterSets);

//Returns a range of characters
function addCharactersRange(InitialASCIICharacter, lastASCIICharacter) {
  let charactersList = "";

  for (let i = InitialASCIICharacter; i < lastASCIICharacter; i++) {
    charactersList += String.fromCharCode(i);
  }
  return charactersList;
}

//Part 5
const generateButton = document.querySelector(
  ".password__generate-button-container>button"
);

// const checkboxLabels = document.querySelectorAll(".password__checkboxes>*");

const checkboxes = document.querySelectorAll(".password__checkboxes-input");

generateButton.addEventListener("click", createPassword);

function createPassword() {
  const checkedDataSets = checkedSets();

  if (!checkedDataSets.length) {
    alert("At least a box must be checked in order to generate a password!");
    return;
  } else {
    console.log("At least 1 one box was checked! Creating password...");
  }

  const concatenatedDataSets = checkedDataSets.reduce((acc, cur) => acc + cur);

  let password = "";
  let passwordBase = [];
  for (let i = 0; i < checkedDataSets.length; i++) {
    passwordBase.push(
      checkedDataSets[i][getRandomNumber(0, checkedDataSets[i].length - 1)]
    );
  }

  // reste du mdp
  for (let i = checkedDataSets.length; i < rangeInputElement.value; i++) {
    password +=
      concatenatedDataSets[getRandomNumber(0, concatenatedDataSets.length - 1)];
  }

  // mélange
  passwordBase.forEach((item, index) => {
    const randomIndex = getRandomNumber(0, password.length);
    password =
      password.slice(0, randomIndex) +
      passwordBase[index] +
      password.slice(randomIndex);
  });
  textInputElement.value = password;
}

function checkedSets() {
  const checkedSets = [];
  checkboxes.forEach(
    (checkbox) =>
      checkbox.checked && checkedSets.push(characterSets[checkbox.id])
  );

  return checkedSets;
}

//Part 6

//Part 7

//Part 8
