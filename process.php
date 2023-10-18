<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if (!empty($name) && !empty($email) && !empty($message)) {
        // Send an email notification to your specified email address
        $to = "philosncube@gmail.com";
        $subject = "Portfolio Contact Form Submission from $name";
        $message = "Name: $name\nEmail: $email\nMessage: $message";

        mail($to, $subject, $message);

        echo "Message sent successfully!";
    } else {
        echo "Please fill in all fields.";
    }
}
?>
