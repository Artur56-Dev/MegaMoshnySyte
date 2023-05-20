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

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$user_id = $_SESSION['user']['user_id'];
$cart_id = $_SESSION['cart_id'];
$total_price = $data['total_price'];

$sql = "SELECT ci.id, ci.basket_id, ci.product_id, ci.quantity, p.article, p.name, p.description, p.price, p.image_url, p.category_id
        FROM Cart_item ci
        JOIN Products p ON ci.product_id = p.product_id 
        WHERE ci.basket_id = $cart_id";
$result = $conn->query($sql);

$products = [];

while($row = $result->fetch_assoc()){
    array_push($products,$row);
}
$current_date = date('Y-m-d H:i:s');
$mysql_date_format = date_format(date_create($current_date), 'Y-m-d H:i:s');
$sql = "INSERT INTO `Orders` (`order_date`, `user_id`, `total_price`, `status`, `payment_type`) VALUES ('$mysql_date_format', $user_id, $total_price, 1, 'По карте')";
mysqli_query($conn,$sql);
$order_id = intval(mysqli_insert_id($conn));
foreach($products as $product)
{
    $product_id = $product['product_id'];
    $quantity = $product['quantity'];
    $sql = "INSERT INTO `Oreder_details` (`order_id`, `product_id`, `quantity`) VALUES ($order_id, $product_id, $quantity)";
    mysqli_query($conn, $sql);
}
$sql = "DELETE FROM `Cart_item` WHERE basket_id = $cart_id";
mysqli_query($conn, $sql);
$response = [
  "order_id" => $order_id,
  "total_price" => $total_price,
  "products" => $products
];
echo json_encode($response);
$conn->close();
?>