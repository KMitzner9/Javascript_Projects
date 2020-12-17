You typed in: <?php print $_POST['fullname'];?>

<?php
	$to = "KMitzner9@gmail.com";
	$subject = "Email from my website";
	$body = "the user typed in ...";
	mail($to, $subject, $body);
?>