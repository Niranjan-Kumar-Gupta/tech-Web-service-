
<?php 
 include 'header.php'
?>
<div class="container-login">
<div class="sign">
    <form class="from-sign" action="login.php" method="post">
        <h1>Sign In</h1>
        <div id="incorrect">
              Username or Password are Incorrect
        </div>
        <div class="from-group">
            <label for="#">Username</label>
            <input type="text" name="username">
        </div>
        <div class="from-group">
            <label for="#">Password</label>
            <input type="password" name="password">
        </div>
        <div class="from-group">    
            <input id="btn" type="submit" value="Sign In">
        </div>
    </form>
    <a href="register.php">Register Here</a>
    <a href="#">forgotten password</a>
</div>
</div>   
<?php 
 include 'footer.php'
?>