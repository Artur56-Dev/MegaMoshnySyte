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

$sql = "SELECT * FROM `Orders` JOIN `Statuses` ON `Statuses`.`statuses_id` = `Orders`.`status`;";
// $sql = "SELECT * FROM `Orders` JOIN `Oreder_details` on `Oreder_details`.`order_id` = `Orders`.`order_id` JOIN `Products` ON `Products`.`product_id` = `Oreder_details`.`product_id`";
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