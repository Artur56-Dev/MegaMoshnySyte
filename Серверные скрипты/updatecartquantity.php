<?php
session_id("my-session-id");
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

if (isset($_SESSION['user'])) {
    $user_id = $_SESSION['user']['user_id'];
    $sql = "SELECT `basket_id` FROM `Basket` WHERE `user_id` = $user_id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $basket_id = $row['basket_id'];

    // Query the Cart_item table to count the number of rows with the user's basket_id
    $sql = "SELECT COUNT(*) as `num_items` FROM `Cart_item` WHERE `basket_id` = $basket_id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $num_items = $row['num_items'];
    $response = $num_items;
}
echo json_encode($response);
?>
