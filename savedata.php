<?php

$user = $_POST['username'];
$pass = $_POST['password'];

$conn = mysqli_connect("localhost","root","","niru_tech") or die("connection failed");

$sql = "INSERT INTO student(user,passwd) VALUES ('{$user}','{$pass}') ";

$result = mysqli_query($conn,$sql) or die("query unseccfull");

header("Location: http://localhost/niru_tech/index.php");

mysqli_close($conn);
?>