<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

session_id("my-session-id");
session_start();

$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "InternetStore";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$login = $_POST['login'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE `login` = '$login' AND `password` = '$password'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){

    $user = mysqli_fetch_assoc($result);


    $userData = [
        "user_id" => $user['user_id'],
        "login" => $user['login'],
        "full_name" => $user['full_name'],
        "phone" => $user['phone'],
        "email" => $user['email'],
        "date_of_birthday" => $user['date_of_birthday'],
        "gender" => $user['gender'],
        "address" => $user['address'],
    ];

    $_SESSION['user'] = $userData;

    $response = [
        "status" => true
    ];
    echo json_encode($response);
    session_write_close();
}

else{
    $response = [
        "status" => false,
        "message" => 'Не верный логин или пароль'
    ];
    echo json_encode($response);
}
?>