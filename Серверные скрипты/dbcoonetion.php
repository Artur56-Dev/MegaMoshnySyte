<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "InternetStore";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT product_id, article, category_id, description, image_url, name, price FROM Products";
$result = $conn->query($sql);

$products = [];

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    array_push($products, $row);
  }
} else {
  echo "0 results";
}

header("Content-Type: application/json");
echo json_encode($products);

$conn->close();

// header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

// header("Access-Control-Allow-Origin: *");

// $servername = 'localhost';
// $username = 'root';
// $password = '';
// $dbname = 'InetrnetStore';

// $conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }

// $sql = "SELECT article, category_id, description, image_url, name, price FROM Products";
// $result = $conn->query($sql);

// $products = [];

// if ($result->num_rows > 0) {
//   while($row = $result->fetch_assoc()) {
//     array_push($products, $row);
//   }
// } else {
//   echo "0 results";
// }

// header("Content-Type: application/json");
// echo json_encode($products);

// $conn->close();
?>
