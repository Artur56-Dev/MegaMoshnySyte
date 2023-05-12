<?php
session_id('my-session-id');
session_start();
header('Access-Control-Allow-Origin: http://localhost');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");


// if (isset($_SESSION['user'])) { // check if the 'user' session variable is set
    
//     $user = $_SESSION['user'];
//     $fullName = $user['full_name'];
//     echo "User ID: " . $user['user_id'] . "<br>";
//     echo "Login: " . $user['login'] . "<br>";
//     echo "Full name: " . $user['full_name'] . "<br>";
//     // display any other user data you need
// } else {
//     echo "User not logged in.";
// }

// $_SESSION['user'] = [
//     "id" => 1,
//     "username" => "john_doe",
//     "email" => "john_doe@example.com"
// ];

// // Output the user data as a JavaScript object
// echo "<script>var userData = " . json_encode($_SESSION['user']) . ";</script>";

?>

<!-- <script>
console.log(userData);
</script> -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Профиль</title>
</head>
<body>
    <div>Страница профиля</div>
    <div> Добро пожаловть, <?php echo $fullName ?> </div>
</body>
</html>