const form = {
  login: document.getElementById('login'),
  pass1: document.getElementById('pass'),
  pass2: document.getElementById('pass1'),
  button: document.querySelector('button')
}

function handleInput(event, name){
  const {value} = event.target
  if(value){
    form[name].classList.add('filled')
  } else {
    form[name].classList.remove('filled');
  }
}

function checkpass(event) {
  event.preventDefault();
  const pass1Value = form.pass1.value;
  const pass2Value = form.pass2.value;
  
  if (pass1Value !== pass2Value) {
    alert('Пароли не совпадают');
  } else {
    alert('Пароли совпадают');
  }
}

form.login.oninput = (event) => handleInput(event, 'login')
form.pass1.oninput = (event) => handleInput(event, 'pass1')
form.pass2.oninput = (event) => handleInput(event, 'pass2')
form.button.onclick = checkpass;
