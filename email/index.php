<?php
 if(isset($_POST['submit']))
 {
    $name = $_POST['name'];
	$email = $_POST['email'];
	$query = $_POST['message'];
	$email_from = $name.'<'.$email.'>';

 $to="matan.uchen@gmail.com";
 $subject="Website Contact";
 $headers  = 'MIME-Version: 1.0' . "\r\n";
 $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 $headers .= "From: ".$email_from."\r\n";
 $message="	  
 	   
 		 Name:
		 $name 	   
         <br>
 		 Email-Id:
		 $email 	   
         <br>
 		 Message:
		 $query 	   
      
   ";
	if(mail($to,$subject,$message,$headers))
		header("Location:../success.html#contact");
	else
		header("Location:../fail.html#contact");
		//contact:-your-email@your-domain.com
 }
?>
