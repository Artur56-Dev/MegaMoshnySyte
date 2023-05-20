<?php
session_id('my-session-id');
session_start();
header('Access-Control-Allow-Origin: http://localhost');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "InternetStore";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

$product_id = $data["product_id"];
$article = $data["article"];
$name = $data["name"];
$description = $data["description"];
$price = $data["price"];
$image_url = $data["image_url"];
$user_id = intval($_SESSION['user']['user_id']);

$sql = "SELECT * FROM `Basket` WHERE `user_id` IN ($user_id)";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $cart = $row;
  }
}

if (!$cart) {
  $sql = "INSERT INTO `Basket` (`user_id`)  VALUES ($user_id)";
  mysqli_query($conn, $sql);
  $cart_id = intval(mysqli_insert_id($conn));
} else {
  $cart_id = intval($cart['basket_id']);
}

$_SESSION["cart_id"] = $cart_id;

$quantity = 1;
$sql = "SELECT * FROM `Cart_item` WHERE `basket_id` = $cart_id  AND `product_id` = $product_id";
$resul = $conn->query($sql);

if($resul->num_rows > 0){
  $sql = "UPDATE `Cart_item` SET `quantity` = `quantity` + 1 WHERE `basket_id` = $cart_id AND `product_id` = $product_id";
  mysqli_query($conn, $sql);
}
else{
  $sql = "INSERT INTO `Cart_item` (`basket_id`, `product_id`, `quantity`) VALUES ($cart_id, $product_id, $quantity)";
  mysqli_query($conn, $sql);
}



$response = array(
  "status" => "success",
  "message" => "Товар добавлен в корзину"
);

mysqli_close($conn);
echo json_encode($response);

// $result = mysqli_query($mysqli, "SELECT basket_id FROM Basket WHERE `user_id` = '$user_id'");
// if (mysqli_num_rows($result) == 0) {
//     mysqli_query($mysqli, "INSERT INTO Basket (user_id) VALUES ($user_id)");
//     $cart_id = mysqli_insert_id($mysqli);
// } else {
//     $row = mysqli_fetch_array($result);
//     $cart_id = $row['id'];
// }
// mysqli_query($mysqli, "INSERT INTO products_in_basket (id, basket_id, product_id, quantity, cost)  VALUES ($cart_id, $product_id, 1, $price)");
