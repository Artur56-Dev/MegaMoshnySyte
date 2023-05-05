
const div = document.querySelector('.header');
const threshold = div.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > threshold) {
    div.classList.add('fixed-top');
  } else {
    div.classList.remove('fixed-top');
  }
});

const form = {
  login: document.getElementById('login'),
  pass1: document.getElementById('password')
}

function handleInput(event, name){
  const {value} = event.target
  if(value){
    form[name].classList.add('filled')
  } else {
    form[name].classList.remove('filled');
  }
}

form.login.oninput = (event) => handleInput(event, 'login')
form.pass1.oninput = (event) => handleInput(event, 'pass1')

const regform = document.querySelector('.mainregisterdiv');
const loginbtn = document.querySelector('.loginautorizbut1');
const colseregform = document.querySelector('.btnclose');

loginbtn.addEventListener('click', () => {
  regform.style.display = 'block';
});
colseregform.addEventListener('click', () => {
  regform.style.display = 'none';

  const divElements = document.querySelectorAll('.mainregisterdiv');

// перебираем элементы и проверяем наличие элемента input
for (const divElement of divElements) {
  const inputElements = divElement.querySelectorAll('input');
  for (const inputElement of inputElements) {
    // очищаем значение каждого элемента input
    inputElement.value = null;
    form.login.classList.remove('filled');
    form.pass1.classList.remove('filled');
  }
}
});


  