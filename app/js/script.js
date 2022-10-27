const form = document.querySelector('.form__content');

const cardholder = document.querySelector('#card-holder');
const holderInput = document.querySelector('#card-holder-name');

const cardNumber = document.querySelector('#card-number');
const numberInput = document.querySelector('#card-number-form');

const cardExpiryMonth = document.querySelector('#card-expiry-month');
const expiryMonthInput = document.querySelector('#card-expiry-month-form');

const cardExpiryYear = document.querySelector('#card-expiry-year');
const expiryYearInput = document.querySelector('#card-expiry-year-form');

const cardCVC = document.querySelector('#card-cvc');
const cvcInput = document.querySelector('#cvc-number');

const cardTexts = document.querySelectorAll('.card__text');
const formInputs = document.querySelectorAll('.form input');

const cardPlaceHolders = {
  'card-holder': 'Jane Appleseed',
  'card-number': '0000 0000 0000 0000',
  'card-expiry-month': '00',
  'card-expiry-year': '00',
  'card-cvc': '000',
};

cardTexts.forEach((text) => {
  if (text.textContent == '') {
    text.textContent = cardPlaceHolders[text.id];
  }
});

holderInput.addEventListener('input', (e) => {
  cardholder.textContent = e.target.value;

  if (e.target.value == '') {
    cardholder.textContent = 'Jane Appleseed';
  }
});

numberInput.addEventListener('input', (e) => {
  cardNumber.textContent = e.target.value;

  if (e.target.value == '') {
    cardNumber.textContent = '0000 0000 0000 0000';
  }
});

expiryMonthInput.addEventListener('input', (e) => {
  cardExpiryMonth.textContent = e.target.value;

  if (e.target.value == '') {
    cardExpiryMonth.textContent = '00';
  }
});

expiryYearInput.addEventListener('input', (e) => {
  cardExpiryYear.textContent = e.target.value;

  if (e.target.value == '') {
    cardExpiryYear.textContent = '00';
  }
});

cvcInput.addEventListener('input', (e) => {
  cardCVC.textContent = e.target.value;

  if (e.target.value == '') {
    cardCVC.textContent = '000';
  }
});

// FORM VALIDATION

const numberInputs = document.querySelectorAll('.form-number-input');
const textInputs = document.querySelector('.form-text-input');
const nameError = document.querySelector('#card-name-error');

form.addEventListener('submit', (e) => {
  formInputs.forEach((input) => {
    let messages = [];
    const formGroup = input.closest('.form__group');
    const inputParent = input.parentElement;
    const error = formGroup.querySelector('.form__error-messsage');

    if (input.value == '' || input.value == null) {
      messages.push(`Can't be blank`);
    }

    if (
      input.classList.contains('form-number-input') &&
      typeof Number(input.value) == 'number' &&
      input.value.length > 0
    ) {
      messages.push('Wrong format, numbers only');
      console.log(input.value);
    }

    if (messages.length > 0) {
      e.preventDefault();
      inputParent.style.background = '#ff5252';
      error.innerHTML = messages.join(',');
    }
  });
});
