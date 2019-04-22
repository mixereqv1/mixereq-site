    
<?php
    $to_mail = 'mateuszral7@gmail.com';
    $subject = $_POST['subject'];
    $imie = $_POST['imie'];
    $headers = 'From: ' .$_POST['from_mail'];
    $message = $_POST['message'];
    mail($to_mail,$subject,$message,$headers);
    header('location:index.html');
?>