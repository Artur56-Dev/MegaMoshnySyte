<?php
session_id("my-session-id");
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "InternetStore";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
$cart_id = $_SESSION["cart_id"];
$product_id = $data["product_id"];
$sql = "DELETE FROM `Cart_item` WHERE `basket_id` = $cart_id AND `product_id` = $product_id";
mysqli_query($conn,$sql);
$response = array(
  "status" => "success",
  "message" => "Был удален товар с id $product_id корзины с id $cart_id",

);
echo json_encode($response);
$conn->close();
?>