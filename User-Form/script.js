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

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //check if value is empty
  if(username.value === '') {
    showError(username, 'Username is required')
  }
  else {
    showSuccess(username)
  }
})