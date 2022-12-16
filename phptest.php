<?php
$servername = "34.90.247.171";
$username = "test-werk";
$password = $_GET['pass'];

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
