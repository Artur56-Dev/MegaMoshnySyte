<?php
session_id('my-session-id');
session_start();
header("Access-Control-Allow-Origin *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="/Orders/style.css">
    <script src="  https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.4.min.js"></script>
    <title>Заказы</title>
</head>

<body>
    <div class="maindiv">
        <div class="a1">
            <h2>Заказы</h3>
        </div>
        <div class="orderdiv">
            <div class="orderdiv-a1">
                <div class="orderdiv-b1">
                    <div class="orderdiv-b1-c1">
                        <h3>Заказ от 00 декабря 0000 г.</h3>
                        <a>732978324987-0374</a>
                    </div>
                    <div class="orderdiv-b1-c2">
                        <div class="orderdiv-b1-c2-d1"><p>оплачено</p></div>
                        <div><span id="orderprice">2001 Р</span></div>
                    </div>
                </div>
                <div class="orderdiv-a2">
                    <div class="orderdiv-b2-c1">
                        asf
                    </div>
                    <div class="orderdiv-b2-c2">
                        fkldjfldkj
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>