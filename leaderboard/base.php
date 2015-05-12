<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}

$dbhost = "localhost"; // hostname
$dbname = "g7"; // the name of database
$dbuser = "g7"; // the username for the database
$dbpass = "pass"; // the password

$con = mysqli_connect($dbhost, $dbuser, $dbpass) or die("MySQL Error: " . mysqli_error());
mysqli_select_db($con, $dbname) or die("MySQL Error: " . mysqli_error());
//mysqli_close($con);
?>