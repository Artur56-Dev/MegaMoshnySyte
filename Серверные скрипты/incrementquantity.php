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
$conn = mysqli_connect($servername, $username, $password, $dbname);
$product_id = $data["product_id"];
$cart_id = $_SESSION["cart_id"];
$sql = "UPDATE `Cart_item` SET `quantity` = `quantity` + 1 WHERE `basket_id` = $cart_id AND `product_id` = $product_id";
mysqli_query($conn,$sql);
$sql = "SELECT `quantity` FROM `Cart_item` WHERE `basket_id` = $cart_id AND `product_id` = $product_id";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$num_items = $row['quantity'];
$response = $num_items;
echo json_encode($response);
mysqli_close($conn);
?>