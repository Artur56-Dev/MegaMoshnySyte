<?php
session_id('my-session-id');
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "InternetStore";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$user_id = intval($_SESSION['user']['user_id']);
$sql = "SELECT * FROM `Basket` WHERE `user_id` IN ($user_id)";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc()) {
  $cart = $row;
}

$cart_id = intval($cart['basket_id']);

$sql = "SELECT ci.id, ci.basket_id, ci.product_id, ci.quantity, p.article, p.name, p.description, p.price, p.image_url, p.category_id
        FROM Cart_item ci
        JOIN Products p ON ci.product_id = p.product_id 
        WHERE ci.basket_id = $cart_id";
$result = $conn->query($sql);

$products = [];

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    array_push($products, $row);
  }
} else {
  $products = "";
}

echo json_encode($products);

$conn->close();
?>