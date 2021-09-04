<?php 
 include 'header.php'
?>
   
   <canvas id="canvas2"></canvas>
   <div class="contact-info">
   <div class="contact-info-item">
      <img src="http://localhost/niru_tech/img/address-icon-1741.png" alt="">
      <h1>Ballia,U.P,India</h1>
   </div>
   <div class="contact-info-item">
      <img src="http://localhost/niru_tech/img/email-icon-99.png" alt="">
      <h1>niru@gmail.com</h1>
    </div>
    <div class="contact-info-item">
      <img src="http://localhost/niru_tech/img/contact-icon-png-4055.png" alt="">
    
      <h1>+91-0612-237 1712</h1>
    </div>
   </div>
   <div class="contact">
       <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">  
            <h1>Send Us a message</h1>
            <label for="" class="from-g">Name</label>
            <input type="text" name="name" class="from-g" required>
            <label for="#" class="from-g">Email</label> 
            <input type="text" name="email" class="from-g" required>
           
            <label for="#" class="from-g">Message</label>             
            <textarea name="msg" class="from-g" row="8" id="textarea" ></textarea>
            <input type="submit" name="esend"  value="Send" id="btn-msg">
       </form>
   </div>
  
    <script src="js\script-contact.js"></script>
<?php 
 include 'footer.php'
?>

<?php 
    
  if (isset($_POST['esend'])){
      $to = "niru@gmail.com";
      $subject = "user msg";
      $msg = $_POST['msg'];
      $from = $_POST['email'];
      $headers = "From : $from";
      mail($to,$subject,$msg,$headers);
      echo ' <div class="send-msg">
                <h2>Message Send Successfully</h2>
                <h3><a href="index.php">go to home page</a>
             </div>';
  }
?>

