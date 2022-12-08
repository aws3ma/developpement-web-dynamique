<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "test";
$conn = mysqli_connect($servername, $username, $password, $db);

$name = $_POST["name"];
$username = $_POST["username"];
$password = $_POST["password"];

$query = "insert into personne values('" . $name . "','" . $username . "','" . $password . "')";
if (mysqli_query($conn, $query))
    header("Location: connexion.html");
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>