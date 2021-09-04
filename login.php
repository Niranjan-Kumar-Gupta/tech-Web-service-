<?php

$user = $_POST['username'];
$pass = $_POST['password'];

$conn = mysqli_connect("localhost","root","","niru_tech") or die("connection failed");

$sql = "SELECT * FROM student WHERE user = '{$user}' AND passwd = '{$pass}'";

$result = mysqli_query($conn,$sql) or die("query unseccfull");


if (mysqli_num_rows($result) > 0) {
    header("Location: http://localhost/niru_tech/user.php");
}else{
    echo '
     <script type="text/javascript">
       window.location="sing.php";
       alert("username or Password are Incorrect");
    </script>
    ';
}
    mysqli_close($conn);
?> 

