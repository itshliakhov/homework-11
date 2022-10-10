const cardNumber = document.querySelector(".js--card_number");
const cardNumberInput = document.querySelector("#card_number");
const cardHolder = document.querySelector(".js--card_holder");
const cardHolderInput = document.querySelector("#card_holder");
const cardExpires = document.querySelector(".js--expires");
const cardExpiresInput = document.querySelector("#expiration_date");
const cardCvvInput = document.querySelector("#card_cvv");
const formSumbitBtn = document.querySelector(".js--submit");

function moveValueToCard(input, output, type) {
  input.addEventListener(`${type}`, () => {
    this.value = input.value;
    output.innerText = this.value;
  });
}
moveValueToCard(cardNumberInput, cardNumber, "keypress");
moveValueToCard(cardHolderInput, cardHolder, "keypress");
moveValueToCard(cardExpiresInput, cardExpires, "keypress");

function clearFormValue() {
  cardNumberInput.value = "";
  cardHolderInput.value = "";
  cardExpiresInput.value = "";
  cardCvvInput.value = "";
}
function showFormInfo() {
  console.log("Card Name:", cardHolderInput.value);
  console.log("Card Number:", cardNumberInput.value);
  console.log("Card Expiration Date:", cardExpiresInput.value);
  console.log("Card CVV Input:", cardCvvInput.value);
}
function checkFormComplited() {
  if (
    cardHolderInput.value === "" &&
    cardNumberInput.value === "" &&
    cardExpiresInput.value === "" &&
    cardCvvInput.value === ""
  ) {
    alert("Please fill out the form!");
  } else {
    showFormInfo();
    clearFormValue();
  }
}
function submitForm(event) {
  event.preventDefault();
  checkFormComplited();
}
formSumbitBtn.addEventListener("click", submitForm);
