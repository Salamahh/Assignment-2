// set date input value for custom date input
const customDate = document.querySelector('[data-id="customDate"]');

const dateInput = customDate.nextElementSibling;

dateInput.onchange = (e) => {
  customDate.innerText = e.target.value;
};

// show and hidepassword
const passwordInput = document.querySelector('[data-input="password"]');
const hidePassword = passwordInput.nextElementSibling;

hidePassword.onclick = () => {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
  } else if (passwordInput.type == "text") {
    passwordInput.type = "password";
  }
};
