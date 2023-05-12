<?php
session_id("my-session-id");
session_start();
$full_name = $_SESSION['user']['full_name'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="mainstyle.css">
  <script src="  https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.4.min.js"></script>
  <title>Маркет</title>

</head>

<body>
  <div class="xd">
    <div class="aa1">
      <img src="../Icons/gealocation.png" height="100%" />
      <div class="place">Москва</div>
      <button class="replace">Укажите адрес доставки</button>
    </div>
    <div class="aa2">
      <ul>
        <li><button class="aa2-bt1">Стать продавцом</button></li>
        <li><button class="aa2-bt2">Покупать как компания</button></li>
        <li><button class="aa2-bt2">Подарочнаые сертификаты</button></li>
        <li><button class="aa2-bt2">Помощ</button></li>
        <li><button class="aa2-bt2">Пункты выдачи</button></li>
      </ul>
    </div>
  </div>
  <div class="header">
    <div class="icondiv"></div>
    <div class="aa3">
      <img src="../Icons/toc.svg" height="100%" />
      <p>Каталог</p>
    </div>
    <div class="aa4">
      <div class="aa4-dv1">
        <input placeholder="Искать товраы" />
      </div>
      <div class="aa4-dv2">
        <button>
          <img src="../Icons/search.svg" />
        </button>
      </div>
    </div>
    <div class="aa5">
      
      <button class="loginautorizbut1">
        <img src="../Icons/account.svg" height="60%" />
        <p class="aa5-bb1">
          <?php
          if (isset($_SESSION['user'])) {
            $user_data = ($_SESSION['user']);
            $full_name = ($_SESSION['user']['full_name']);
            $name_parts = explode(' ', $full_name); // split full name by space character
            $first_name = $name_parts[0];
            echo $first_name;
          }
          else{
            echo 'Войти';
          }
          ?>
        </p>
      </button>
      <div class="aa5-bd1">
        <a>Личный кабинет</a>
        <a>Заказы</a>
        <a>Избранное</a>
        <Button id="logout-btn">Выйти</Button>
      </div>
      <button>
        <img src="../Icons/inventory.svg" height="60%" />
        <p>Заказы</p>
      </button>
      <button>
        <img src="../Icons/favorite.svg" height="60%" />
        <p>Избранное</p>
      </button>
      <button class="basket">
        <div class="quantitycircle">
          <span id="cart-quantity">0</span>
        </div>
        <img src="../Icons/shopping.svg" height="60%" />
        <p>Корзина</p>
      </button>
    </div>
  </div>
  <div class="mainregisterdiv">
    <button class="btnclose"><img src="../Icons/close.png" /></button>
    <div class="regdiv1">
      <h2>Вход</h2>
      <button class="registrbut">Авторизация</button>
    </div>
    <form>
      <div class="regdiv2">
        <label id="login">
          <input type="text" name="login" />
          <span>Логин</span>
        </label>
        <label id="password">
          <input type="password" name="password" />
          <span>Пароль</span>
        </label>
        <button type="submit" class="signinbutton">Войти</button>
      </div>
    </form>
  </div>
  <div class="maindivwithproducts">
    <div class="productsdiv"></div>
  </div>
  <footer class="footer">
    <div>
      <div class="foot-div1">
        <span>Маркетплейс</span>
        <a>Контакты</a>
        <a>Развитие</a>
        <a>Партнерская программа</a>
        <a></a>
      </div>
      <div class="foot-div1">
        <span>Покупателю</span>
        <a>Помощь покупатлю</a>
        <a>Доставка</a>
        <a>Примерка</a>
        <a>Оплата</a>
        <a>Возврат</a>
        <a>Промокоды</a>
      </div>
      <div class="foot-div1">
        <span>Работать с компанией</span>
        <a>Стать продавцом</a>
        <a>Стать поставщиком</a>
        <a>Открыть пункт выдачи</a>
      </div>
      <div class="foot-div1">
        <span>Правовая информация</span>
        <a>Условия использования сайта</a>
        <a>Политика обработки персональных данных</a>
        <a>Условия заказа и доставки</a>
        <a>Правила сервиса «закажи и забери»</a>
      </div>
      <div class="foot-div2">
        <img src="../Icons/QR-code(1).svg" height="130px" width="130px" style="border-radius: 10px" />
        <div>
          <button>
            <img src="../Icons/free-icon-vkontakte-4494517.png" />
          </button>
          <button>
            <img src="../Icons/free-icon-odnoklassniki-3670250.png" />
          </button>
          <button>
            <img src="../Icons/free-icon-telegram-2111646.png" />
          </button>
        </div>
        <div>Нас там нет и не будет</div>
        <div style="font-size: 2pt">Сайт нарушает все авторские права</div>
      </div>
    </div>
  </footer>
  <script src="mainscript.js"></script>
  <script src="dbconnection.js"></script>
</body>

</html>