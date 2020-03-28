// get all nodes
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const showError = (input, message) => {
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control error';
  const small = formcontrol.querySelector('small');
  small.innerText = message;
}

const showSuccess = (input) => {
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control success';
}

const checkLength = (input, min, max) => {
  if(input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} characters`);
  } else if(input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} characters`)
  } else {
    showSuccess(input)
  }
} 

const checkValidEmail = (email) => {

  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!res.test(String(email.value.trim()).toLowerCase)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email)
  }
}

const checkRequiredFields = (inputArray) => {
  inputArray.forEach((input) => {
    if(input.value.trim() === '') {
      showError(input, `${input.id} is required`)
    } else {
      showSuccess(input)
    }
  })
}

const checkPasswordMatch = (input1 , input2) => {
  if(input1.value.trim() !== input2.value.trim()) {
    showError(input2, 'Passwords do not match');
  } else {
    showSuccess(input2);
  }

}
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequiredFields([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkValidEmail(email);
  checkPasswordMatch(password, confirmPassword);
})