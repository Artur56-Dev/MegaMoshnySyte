<?php
session_id("my-session-id");
session_start();
$address = $_SESSION['user']['address'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.4.min.js"></script>
    <link rel="stylesheet" href="/Makinganorder/style.css">
    <title>Document</title>
</head>

<body>
    <div class="maindiv">
        <div class="maindiv-a1">
            <div class="maindiv-a1-b1" style="margin-right: 50px;">
                <div class="maindiv-a1-b1-c1">
                    <span class="material-symbols-outlined">
                        undo
                    </span>
                </div>
                <div class="maindiv-a1-b1-c2">
                    <p class="maindiv-a1-b1-c2-p1">Гарантия легкого возврата</p>
                    <p class="maindiv-a1-b1-c2-p2">Заберем товар и быстро вернем деньги</p>
                </div>
            </div>
            <div class="maindiv-a1-b1">
                <div class="maindiv-a1-b1-c1">
                    <span class="material-symbols-outlined">
                        local_shipping
                    </span>
                </div>
                <div class="maindiv-a1-b1-c2">
                    <p class="maindiv-a1-b1-c2-p1">Бесплатная доставка курьером</p>
                    <p class="maindiv-a1-b1-c2-p2">При стоимости заказа от 2500 Р</p>
                </div>
            </div>
        </div>
        <div class="separator">
        </div>
        <div class="maindiv-a2">
            <div class="maindiv-a2-b1">
                <a href="/Cart/">Вернутся в корзину</a>
                <h1>Оформление заказа</h1>
            </div>
            <div class="maindiv-a2-b2">
                <div class="maindiv-a2-b2-c1">
                    <div class="maindiv-a2-b2-c1-d1">
                        <h3>Способ оплаты</h3>
                        <div class="maindiv-a2-b2-c1-d1-e1">
                            <input type="radio" id="radio1" name="payradio">
                            <label class="labelforrado" for="radio1">
                                <div class="labelforrado-div1">
                                    <span class="material-symbols-outlined credit_card">
                                        credit_card
                                    </span>
                                    <p>Оплата картой</p>
                                </div>
                            </label>
                            <input type="radio" id="radio2" name="payradio">
                            <label class="labelforrado yellowsadow" for="radio2">
                                <div class="labelforrado-div2">
                                    <span class="material-symbols-outlined ">
                                        donut_large
                                    </span>
                                    <p>Рассрочка</p>
                                </div>
                            </label>
                            <input type="radio" id="radio3" name="payradio">
                            <label class="labelforrado" for="radio3">
                                <div class="labelforrado-div3">
                                    <img src="/Icons/SBP_logo.png" style="height: 100%; padding: 15px;">
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="maindiv-a2-b2-c1-d2">
                        <h3 style="margin-bottom: 10px;">Доставка</h3>
                        <div class="maindiv-a2-b2-c1-d2-e1">
                            <div class="maindiv-a2-b2-c1-d2-e1-f1">
                                <p>Пункт выдачи</p>
                            </div>
                            <div class="maindiv-a2-b2-c1-d2-e1-f2">
                                <span> <?php echo $address ?></span>
                            </div>
                        </div>
                        <div class="maindiv-a2-b2-c1-d2-e1">
                            <div class="maindiv-a2-b2-c1-d2-e1-f1">
                                <p>Стоимость доставки</p>
                            </div>
                            <div class="maindiv-a2-b2-c1-d2-e1-f2">
                                <span>Бесплатно</span>
                            </div>
                        </div>
                        <div class="maindiv-a2-b2-c1-d2-e1">
                            <div class="maindiv-a2-b2-c1-d2-e1-f1">
                                <p>Товары, <span id="productauntity">0</span> шт.</p>
                            </div>
                        </div>
                        <div class="maindiv-a2-b2-c1-d2-e2-products">

                        </div>
                    </div>
                </div>
                <div class="maindiv-a2-b2-c2">
                    <div class="maindiv-a2-b2-c2-d1">
                        <button class="maindiv-a2-b2-c2-d1-e1">
                            <p>Оплатить онлайн</p>
                        </button>
                        <p class="maindiv-a2-b2-c2-d1-e2">Нажимая на кнопку, вы соглашаетесь с <a>Условиями обработки персональных данных</a>, так же с <a>Условиями продаж</a></p>
                        <div class="maindiv-a2-b2-c2-d1-e3"></div>
                        <div class="maindiv-a2-b2-c2-d1-e4">
                            <div>
                                <h3>Ваш заказ</h3>
                            </div>
                            <div>
                                <p>Товары</p>
                                <div>
                                    <span id="totalprice">0</span>
                                    <p>₽</p>
                                </div>
                            </div>
                            <div>
                                <p>Стоимость доставки</p>
                                <span>Бесплатно</span>
                            </div>
                        </div>
                        <div class="maindiv-a2-b2-c2-d1-e3"></div>
                        <div class="maindiv-a2-b2-c2-d1-e5">
                            <h2>Итого</h2>
                            <div>
                                <span id="totalprice2">0</span>
                                <p>₽</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/Makinganorder/script.js"></script>
</body>

</html>