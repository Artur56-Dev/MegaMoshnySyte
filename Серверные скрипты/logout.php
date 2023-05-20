<?php
session_id('my-session-id');
session_start();
header('Access-Control-Allow-Origin: http://localhost');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

session_unset();
// session_destroy();
?>