console.log("hello")
let formElement = document.querySelector("js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.69;
let DOL = 4.42;

formElement.addEventListener('submit', (event) => {
	event.preventDefault();

  let amount = amountElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / EUR;
      break;

    case "USD":
      result = amount / DOL;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(
    2
  )} ${currency}`;
});