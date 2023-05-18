// const div = document.querySelector('.header');
// const threshold = div.offsetTop + div.offsetHeight;;


// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > threshold) {
//     div.classList.add('fixed-top');
//   } else {
//     div.classList.remove('fixed-top');
//   }
// });



const div = document.querySelector('.header');
const placeholder = document.createElement('div'); // create a placeholder element
placeholder.style.height = div.offsetHeight + 'px'; // set its height to the height of the div element
placeholder.style.display = 'none'; // hide the placeholder element for now
div.parentNode.insertBefore(placeholder, div); // insert the placeholder element before the div element

const threshold = div.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > threshold) {
    div.classList.add('fixed-top');
    placeholder.style.display = 'block'; // show the placeholder element when the div element becomes fixed
  } else {
    div.classList.remove('fixed-top');
    placeholder.style.display = 'none'; // hide the placeholder element when the div element is no longer fixed
  }
});

// показывать или скрывать форму входа
const form = {
  login: document.getElementById('login'),
  pass1: document.getElementById('password')
}

function handleInput(event, name) {
  const { value } = event.target
  if (value) {
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

localStorage.setItem('sessionID', 'my-session-id');
const sessionID = localStorage.getItem('sessionID');
loginbtn.addEventListener('click', myHandler);
function myHandler(event) {
  regform.style.display = 'block';
};
// loginbtn.addEventListener('click', () => {
//   regform.style.display = 'block';
// });
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

// нажатие на кнопку "в корзину"
// let count = 0;
// const counter = document.querySelector('#cart-quantity');
// function myfunction() {
//   count++;
//   console.log('кнопка работает');
//   counter.innerHTML = count.toString();
// }

// нажатие на кнопку войти, выполнение ajax с добавление данных пользователя в сессию
$('.signinbutton').click(function (e) {
  e.preventDefault();
  var login = $('input[name="login"]').val(),
    password = $('input[name="password"]').val();
  $.ajax({
    url: 'http://localhost/signin.php',
    type: 'POST',
    dataType: 'json',
    data: {
      login: login,
      password: password
    },
    success: function (data) {
      console.log('до сюда дошло');

      if (data.status === true) {
        console.log(data.full_name);
        regform.style.display = 'none';
        console.log('Пользователь найден');
        // document.location.href = 'http://megamoshnysyte/profile/profile.php';
        $.ajax({
          url: 'http://localhost/update.php',
          type: 'POST',
          dataType: 'json',
          success: function (updatedData) {
            console.log(updatedData);
            $('.aa5-bb1').text(updatedData);
            loginbtn.removeEventListener('click', myHandler);
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error:', jqXHR, textStatus, errorThrown);
          }
        });
        $.ajax({
          url: 'http://localhost/updatecartquantity.php',
          type: 'POST',
          dataType: 'JSON',
          success: function (response) {
            $('#cart-quantity').text(response);
          },
          error: function (error) {
            console.error('AJAX request failed', error);
          }
        });
      }
      else {
        console.log('ошибка');
        alert('Пользователь не найден, проверьте введенные данные');
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log('Error:', jqXHR, textStatus, errorThrown);
    }
  });
});

// выпадающее меню
var hideTimeout;
var loginautorizbut1 = document.querySelector('.loginautorizbut1');
var aa5_bd1 = document.querySelector('.aa5-bd1');

loginautorizbut1.addEventListener('mouseenter', function () {
  clearTimeout(hideTimeout);
  aa5_bd1.style.opacity = 1;
  aa5_bd1.style.visibility = 'visible';
});

loginautorizbut1.addEventListener('mouseleave', function () {
  startHideTimeout();
});

aa5_bd1.addEventListener('mouseenter', function () {
  clearTimeout(hideTimeout);
});

aa5_bd1.addEventListener('mouseleave', function () {
  startHideTimeout();
});

function startHideTimeout() {
  hideTimeout = setTimeout(function () {
    aa5_bd1.style.opacity = 0;
    aa5_bd1.style.visibility = 'hidden';
  }, 300);
}

// ajax запрос выход польхователя и удаление его данных из сессии
$('#logout-btn').click(function () {
  $.ajax({
    type: 'POST',
    url: 'http://localhost/logout.php',
    success: function () {
      console.log('Выход выполнен');
      location.reload();

    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error(textStatus, errorThrown);
    }
  });
});

const catrpagebutton = document.querySelector('#cartpageopen');
catrpagebutton.addEventListener('click', function () {
  window.location.href = "http://megamoshnysyte/Cart/";
});
const orderpagebutton = document.querySelector("#orderpageopen");
orderpagebutton.addEventListener('click', function () {
  window.location.href = "http://megamoshnysyte/Orders/";
});

$('#categoryid1').click(function () {
  console.log('Я работаею');
  $('.productsdiv .divcelldiv').each(function () {
    $(this).remove();
  });
  fetch('http://localhost/dbcoonetion.php')
    .then((response) => response.json())
    .then((products) => {
      insertProducts(products);
    })
    .catch((error) => console.error("Ошибка: ", error));


  function insertProducts(products) {
    const flexContainer = document.querySelector(".productsdiv");

    for (const product of products) {
      console.log(product.category_id);
      if (product.category_id !== '1') {
        continue;
      }
      console.log('Этот продукт подходит');
      const productDiv = document.createElement("div");
      productDiv.className += "divcelldiv";
      const button = document.createElement("button");
      button.innerText = "В корзину";
      button.addEventListener("click", function () {
        console.log(product);
        const data = {
          product_id: product.product_id,
          article: product.article,
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url
        };
        fetch('http://localhost/addinbasket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Товар добавлен');
            $.ajax({
              url: 'http://localhost/updatecartquantity.php',
              type: 'POST',
              dataType: 'JSON',
              success: function (response) {
                $('#cart-quantity').text(response);
              },
              error: function (error) {
                console.error('AJAX request failed', error);
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      });

      productDiv.innerHTML = `
          <div class="divwithimg">
            <img src="${product.image_url}"/>
          </div>
          <div class="divwithspan">
              <span>${product.price} ₽</span>
              </div>
              <div class="divwithname">
              <a>${product.description}</a>
              </div>
              `;

      productDiv.appendChild(button);
      flexContainer.appendChild(productDiv);
    }
  }

});
$('#categoryid2').click(function () {
  console.log('Я работаею');
  $('.productsdiv .divcelldiv').each(function () {
    $(this).remove();
  });
  fetch('http://localhost/dbcoonetion.php')
    .then((response) => response.json())
    .then((products) => {
      insertProducts(products);
    })
    .catch((error) => console.error("Ошибка: ", error));


  function insertProducts(products) {
    const flexContainer = document.querySelector(".productsdiv");

    for (const product of products) {
      console.log(product.category_id);
      if (product.category_id !== '2') {
        continue;
      }
      console.log('Этот продукт подходит');
      const productDiv = document.createElement("div");
      productDiv.className += "divcelldiv";
      const button = document.createElement("button");
      button.innerText = "В корзину";
      button.addEventListener("click", function () {
        console.log(product);
        const data = {
          product_id: product.product_id,
          article: product.article,
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url
        };
        fetch('http://localhost/addinbasket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Товар добавлен');
            $.ajax({
              url: 'http://localhost/updatecartquantity.php',
              type: 'POST',
              dataType: 'JSON',
              success: function (response) {
                $('#cart-quantity').text(response);
              },
              error: function (error) {
                console.error('AJAX request failed', error);
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      });

      productDiv.innerHTML = `
          <div class="divwithimg">
            <img src="${product.image_url}"/>
          </div>
          <div class="divwithspan">
              <span>${product.price} ₽</span>
              </div>
              <div class="divwithname">
              <a>${product.description}</a>
              </div>
              `;

      productDiv.appendChild(button);
      flexContainer.appendChild(productDiv);
    }
  }

});
$('#categoryid3').click(function () {
  console.log('Я работаею');
  $('.productsdiv .divcelldiv').each(function () {
    $(this).remove();
  });
  fetch('http://localhost/dbcoonetion.php')
    .then((response) => response.json())
    .then((products) => {
      insertProducts(products);
    })
    .catch((error) => console.error("Ошибка: ", error));


  function insertProducts(products) {
    const flexContainer = document.querySelector(".productsdiv");

    for (const product of products) {
      console.log(product.category_id);
      if (product.category_id !== '3') {
        continue;
      }
      console.log('Этот продукт подходит');
      const productDiv = document.createElement("div");
      productDiv.className += "divcelldiv";
      const button = document.createElement("button");
      button.innerText = "В корзину";
      button.addEventListener("click", function () {
        console.log(product);
        const data = {
          product_id: product.product_id,
          article: product.article,
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url
        };
        fetch('http://localhost/addinbasket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Товар добавлен');
            $.ajax({
              url: 'http://localhost/updatecartquantity.php',
              type: 'POST',
              dataType: 'JSON',
              success: function (response) {
                $('#cart-quantity').text(response);
              },
              error: function (error) {
                console.error('AJAX request failed', error);
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      });

      productDiv.innerHTML = `
          <div class="divwithimg">
            <img src="${product.image_url}"/>
          </div>
          <div class="divwithspan">
              <span>${product.price} ₽</span>
              </div>
              <div class="divwithname">
              <a>${product.description}</a>
              </div>
              `;

      productDiv.appendChild(button);
      flexContainer.appendChild(productDiv);
    }
  }

});
$('#categoryid4').click(function () {
  console.log('Я работаею');
  $('.productsdiv .divcelldiv').each(function () {
    $(this).remove();
  });
  fetch('http://localhost/dbcoonetion.php')
    .then((response) => response.json())
    .then((products) => {
      insertProducts(products);
    })
    .catch((error) => console.error("Ошибка: ", error));


  function insertProducts(products) {
    const flexContainer = document.querySelector(".productsdiv");

    for (const product of products) {
      console.log(product.category_id);
      if (product.category_id !== '4') {
        continue;
      }
      console.log('Этот продукт подходит');
      const productDiv = document.createElement("div");
      productDiv.className += "divcelldiv";
      const button = document.createElement("button");
      button.innerText = "В корзину";
      button.addEventListener("click", function () {
        console.log(product);
        const data = {
          product_id: product.product_id,
          article: product.article,
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url
        };
        fetch('http://localhost/addinbasket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Товар добавлен');
            $.ajax({
              url: 'http://localhost/updatecartquantity.php',
              type: 'POST',
              dataType: 'JSON',
              success: function (response) {
                $('#cart-quantity').text(response);
              },
              error: function (error) {
                console.error('AJAX request failed', error);
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      });

      productDiv.innerHTML = `
          <div class="divwithimg">
            <img src="${product.image_url}"/>
          </div>
          <div class="divwithspan">
              <span>${product.price} ₽</span>
              </div>
              <div class="divwithname">
              <a>${product.description}</a>
              </div>
              `;

      productDiv.appendChild(button);
      flexContainer.appendChild(productDiv);
    }
  }

});
$('#categoryid5').click(function () {
  console.log('Я работаею');
  $('.productsdiv .divcelldiv').each(function () {
    $(this).remove();
  });
  fetch('http://localhost/dbcoonetion.php')
    .then((response) => response.json())
    .then((products) => {
      insertProducts(products);
    })
    .catch((error) => console.error("Ошибка: ", error));


  function insertProducts(products) {
    const flexContainer = document.querySelector(".productsdiv");

    for (const product of products) {
      console.log(product.category_id);
      if (product.category_id !== '5') {
        continue;
      }
      console.log('Этот продукт подходит');
      const productDiv = document.createElement("div");
      productDiv.className += "divcelldiv";
      const button = document.createElement("button");
      button.innerText = "В корзину";
      button.addEventListener("click", function () {
        console.log(product);
        const data = {
          product_id: product.product_id,
          article: product.article,
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url
        };
        fetch('http://localhost/addinbasket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Товар добавлен');
            $.ajax({
              url: 'http://localhost/updatecartquantity.php',
              type: 'POST',
              dataType: 'JSON',
              success: function (response) {
                $('#cart-quantity').text(response);
              },
              error: function (error) {
                console.error('AJAX request failed', error);
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      });

      productDiv.innerHTML = `
          <div class="divwithimg">
            <img src="${product.image_url}"/>
          </div>
          <div class="divwithspan">
              <span>${product.price} ₽</span>
              </div>
              <div class="divwithname">
              <a>${product.description}</a>
              </div>
              `;

      productDiv.appendChild(button);
      flexContainer.appendChild(productDiv);
    }
  }

});
$('#categoryid6').click(function () {
  console.log('Я работаею');
  $('.productsdiv .divcelldiv').each(function () {
    $(this).remove();
  });
  fetch('http://localhost/dbcoonetion.php')
    .then((response) => response.json())
    .then((products) => {
      insertProducts(products);
    })
    .catch((error) => console.error("Ошибка: ", error));


  function insertProducts(products) {
    const flexContainer = document.querySelector(".productsdiv");

    for (const product of products) {
      console.log(product.category_id);
      if (product.category_id !== '6') {
        continue;
      }
      console.log('Этот продукт подходит');
      const productDiv = document.createElement("div");
      productDiv.className += "divcelldiv";
      const button = document.createElement("button");
      button.innerText = "В корзину";
      button.addEventListener("click", function () {
        console.log(product);
        const data = {
          product_id: product.product_id,
          article: product.article,
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url
        };
        fetch('http://localhost/addinbasket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Товар добавлен');
            $.ajax({
              url: 'http://localhost/updatecartquantity.php',
              type: 'POST',
              dataType: 'JSON',
              success: function (response) {
                $('#cart-quantity').text(response);
              },
              error: function (error) {
                console.error('AJAX request failed', error);
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      });

      productDiv.innerHTML = `
          <div class="divwithimg">
            <img src="${product.image_url}"/>
          </div>
          <div class="divwithspan">
              <span>${product.price} ₽</span>
              </div>
              <div class="divwithname">
              <a>${product.description}</a>
              </div>
              `;

      productDiv.appendChild(button);
      flexContainer.appendChild(productDiv);
    }
  }

});
$('#categoryidall').click(function () {
  console.log('Я работаею');
  $('.productsdiv .divcelldiv').each(function () {
    $(this).remove();
  });
  fetch('http://localhost/dbcoonetion.php')
    .then((response) => response.json())
    .then((products) => {
      insertProducts(products);
    })
    .catch((error) => console.error("Ошибка: ", error));


  function insertProducts(products) {
    const flexContainer = document.querySelector(".productsdiv");

    for (const product of products) {
      console.log(product.category_id);
      console.log('Этот продукт подходит');
      const productDiv = document.createElement("div");
      productDiv.className += "divcelldiv";
      const button = document.createElement("button");
      button.innerText = "В корзину";
      button.addEventListener("click", function () {
        console.log(product);
        const data = {
          product_id: product.product_id,
          article: product.article,
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url
        };
        fetch('http://localhost/addinbasket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Товар добавлен');
            $.ajax({
              url: 'http://localhost/updatecartquantity.php',
              type: 'POST',
              dataType: 'JSON',
              success: function (response) {
                $('#cart-quantity').text(response);
              },
              error: function (error) {
                console.error('AJAX request failed', error);
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      });

      productDiv.innerHTML = `
          <div class="divwithimg">
            <img src="${product.image_url}"/>
          </div>
          <div class="divwithspan">
              <span>${product.price} ₽</span>
              </div>
              <div class="divwithname">
              <a>${product.description}</a>
              </div>
              `;

      productDiv.appendChild(button);
      flexContainer.appendChild(productDiv);
    }
  }

});