const cardNumber = document.querySelector(".js--card_number");
const cardHolder = document.querySelector(".js--card_holder");
const cardExpires = document.querySelector(".js--expires");
const cardNumberInput = document.querySelector("#card_number");
const cardNameInput = document.querySelector("#card_name");
const cardExpirationInput = document.querySelector("#expiration_date");
const cardCvvInput = document.querySelector("#card_cvv");
const submitBtn = document.querySelector(".js--submit");
function addValueToCard(event) {
  event.preventDefault();
  if (
    cardNumberInput.value === "" &&
    cardNameInput.value === "" &&
    cardCvvInput.value === ""
  ) {
    alert("Fill out the form!");
  } else {
    cardNumber.innerText = `${cardNumberInput.value}`;
    cardHolder.innerText = `${cardNameInput.value}`;
    makeCorrectDate();
    showCardInfo();
    clearInput();
  }
}
function makeCorrectDate() {
  let expirationArray = cardExpirationInput.value.split("");
  let expirationArraySlice = expirationArray.slice(2);
  let expirationArrayToString = expirationArraySlice.join("");
  cardExpires.innerText = `${expirationArrayToString.replace("-", "/")}`;
}
function clearInput() {
  cardNumberInput.value = "";
  cardNameInput.value = "";
  cardExpirationInput.value = "";
  cardCvvInput.value = "";
}
function showCardInfo() {
  console.log("Card Name:", cardNameInput.value);
  console.log("Card Number:", cardNumberInput.value);
  console.log("Card Expiration Date:", cardExpirationInput.value);
  console.log("Card CVV Input:", cardCvvInput.value);
}

submitBtn.addEventListener("click", addValueToCard);
