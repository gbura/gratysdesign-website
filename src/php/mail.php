<?php

$name = $_POST["name"];
$from = $_POST["mail"]
$subject = "Wiadomość z formularza GratysDesign";
$to = "gratysdesign@gmail.com";
$message = $_POST["message-box"];

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: ../../index.html?mail_status=sent");
} else {
    header("Location: ../../index.html?mail_status=error");
}