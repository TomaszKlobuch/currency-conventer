{
  const calculateResault = (inputElement, currencyUnit) => {
    const EUR = 4.69;
    const USD = 4.46;

    switch (currencyUnit) {
      case "EUR":
        return inputElement / EUR;

      case "USD":
        return inputElement / USD;
    }
  };

  const updateResoultText = (result, resultElement, currencyUnit) => {
    resultElement.innerText = `${result.toFixed(2)} ${currencyUnit}`;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const resultElement = document.querySelector(".js-result");
    const inputElement = document.querySelector(".js-input");
    const currencyUnitElement = document.querySelector(".js-currencyUnit");

    const amount = +inputElement.value;
    const currencyUnit = currencyUnitElement.value;

    let result = calculateResault(amount, currencyUnit)

    updateResoultText(result, resultElement, currencyUnit)
  }

  const init = () => {

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}