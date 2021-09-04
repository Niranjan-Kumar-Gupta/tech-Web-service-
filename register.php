
<?php 
 include 'header.php'
?>
<div class="container-login">
<div class="register">
    <form class="from-register" action="savedata.php" method="post">
        <h1>Register Here</h1>
        <div class="from-group">
            <label for="#">Username</label>
            <input type="text" name="username">
        </div>
        <div class="from-group">
            <label for="#">Password</label>
            <input type="password" name="password">
        </div>
        <div class="from-group">
            <label for="#">Confirm Password</label>
            <input type="password" name="password">
        </div>
        <div class="from-group">    
            <input id="btn" type="submit" value="Register">
        </div>
    </form>
   <a href="sing.php">already have an account</a>
</div>
</div>   
<?php 
 include 'footer.php'
?>