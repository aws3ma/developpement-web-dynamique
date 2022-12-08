<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "test";
$conn = mysqli_connect($servername, $username, $password, $db);

$username = $_POST["username"];
$password = $_POST["password"];

$query = "select * from personne where username='" . $username . "' and password='" . $password . "'";
if ($result = mysqli_query($conn, $query)) {
    session_start();
    $row = mysqli_fetch_row($result);
    $_SESSION["nom"] = $row[0];
    header("Location: dashboard.php");
}

?>
