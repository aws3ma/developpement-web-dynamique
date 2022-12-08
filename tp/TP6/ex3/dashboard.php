<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php 
        if(isset($_SESSION["nom"]))
            echo "<h1> Bienvenue ".$_SESSION["nom"]."</h1>";
    ?>
    <p> C'est votre tableau de bord</p>
    <a href="deconnexion.php">deconnexion</a>
</body>

</html>