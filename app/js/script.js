const form = document.querySelector('.form__content');

const cardTexts = document.querySelectorAll('.card__text');
const formInputs = document.querySelectorAll('.form-input');

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

const cardholder = document.querySelector('#card-holder');
const holderInput = document.querySelector('#card-holder-name');

holderInput.addEventListener('input', (e) => {
  cardholder.textContent = e.target.value;

  if (e.target.value == '') {
    cardholder.textContent = 'Jane Appleseed';
  }
});

const cardNumber = document.querySelector('#card-number');
const numberInput = document.querySelector('#card-number-form');

numberInput.addEventListener('input', (e) => {
  cardNumber.textContent = e.target.value;

  if (e.target.value == '') {
    cardNumber.textContent = '0000 0000 0000 0000';
  }
});

const cardExpiryMonth = document.querySelector('#card-expiry-month');
const expiryMonthInput = document.querySelector('#card-expiry-month-form');

expiryMonthInput.addEventListener('input', (e) => {
  cardExpiryMonth.textContent = e.target.value;

  if (e.target.value == '') {
    cardExpiryMonth.textContent = '00';
  }
});

const cardExpiryYear = document.querySelector('#card-expiry-year');
const expiryYearInput = document.querySelector('#card-expiry-year-form');

expiryYearInput.addEventListener('input', (e) => {
  cardExpiryYear.textContent = e.target.value;

  if (e.target.value == '') {
    cardExpiryYear.textContent = '00';
  }
});

const cardCVC = document.querySelector('#card-cvc');
const cvcInput = document.querySelector('#cvc-number');

cvcInput.addEventListener('input', (e) => {
  cardCVC.textContent = e.target.value;

  if (e.target.value == '') {
    cardCVC.textContent = '000';
  }
});

// FORM VALIDATION

const formEdit = document.querySelector('.form__edit');
const formComplete = document.querySelector('.form__complete');

form.addEventListener('submit', (e) => {
  formInputs.forEach((input) => {
    let messages = [];
    const inputGrandParent = input.closest('.form__group');
    const inputParent = input.parentElement;
    let errorMsg = inputGrandParent.querySelector('.form__error-messsage');

    if (input.value == '' || input.value == null) {
      messages.push(`Can't be blank`);
    }

    if (
      input.classList.contains('form-number-input') &&
      isNaN(input.value.trim().split(' ').join('')) === true &&
      input.value.length > 0
    ) {
      messages.push('Wrong format, numbers only');
    }

    if (messages.length > 0) {
      e.preventDefault();
      inputParent.style.background = '#ff5252';
      errorMsg.innerHTML = messages.join(',');
    } else {
      inputParent.style.background = 'lime';
      errorMsg.innerHTML = messages.join(',');
    }
  });

  const errorTextLengths = [];
  document
    .querySelectorAll('.form__error-messsage')
    .forEach((msg) => errorTextLengths.push(msg.textContent.length));

  const noErrors = errorTextLengths.every((errMsgLnth) => errMsgLnth === 0);

  if (noErrors && !form.classList.contains('complete')) {
    e.preventDefault();
    formComplete.classList.add('display');
    formComplete.classList.remove('remove');
    formEdit.classList.remove('display');
    formEdit.classList.add('remove');
    form.classList.add('complete');
  } else if (noErrors && form.classList.contains('complete')) {
    formComplete.classList.add('remove');
    formComplete.classList.remove('display');
    formEdit.classList.remove('remove');
    formEdit.classList.add('display');
  }
});
