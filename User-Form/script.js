// get all nodes
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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


const isValidEmail = (email) => {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
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
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequiredFields([username, email, password, password2]);
})