function showErrorMessage (input, errorClass, inputErrorClass) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;

  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
};

function hideErrorMessage (input, errorClass, inputErrorClass) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = '';

  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
};

function checkInputValidity (input, form, rest) {
  if (input.validity.valid) {
      hideErrorMessage (input, form, rest)
  } else {
      showErrorMessage (input, form, rest)
  }
};

function toggleButtonState (inputs, button, inactiveButtonClass) {
  const isValid = inputs.every((input) => input.validity.valid);

  if (isValid) {
    button.classList.remove(inactiveButtonClass)
  } else {
    button.classList.add(inactiveButtonClass)
  }
}

function enableValidation (formSelector, inputSelector, submitButtonSelector) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    form.addEventListener('submit', ((evt) => {
      evt.preventDefault();
    }))

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, form, rest);
        toggleButtonState(inputs, button, rest);
      })
    })
  })
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});
