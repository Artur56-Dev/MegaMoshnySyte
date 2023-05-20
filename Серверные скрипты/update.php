<?php
session_id("my-session-id");
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

 // Define an empty array to hold your data
if(isset($_SESSION['user'])) {
  $user_data = ($_SESSION['user']);
  $full_name = ($_SESSION['user']['full_name']);
  $name_parts = explode(' ', $full_name); // split full name by space character
  $first_name = $name_parts[0];
  $response = $first_name;
  // $response = $user_data['full_name'];
    // $fullName = $_SESSION['full_name'];
    // $response['fullName'] = $fullName; // Add fullName data to the array 
} else {
    $response['error'] = "Session full_name not set"; // Add error data to the array
}

echo json_encode($response);
?>