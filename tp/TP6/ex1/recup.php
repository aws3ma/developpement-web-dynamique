<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex1</title>
</head>

<body>
    <?php
    $nom = $_GET["nom"];
    $prenom = $_GET["prenom"];
    $sexe = $_GET["sexe"];

    ?>
    <ul>
        <li><?php echo $nom ?></li>
        <li><?php echo $prenom ?></li>
        <li><?php echo $sexe ?></li>
        <li><?php echo "Pays arabe visité" ?></li>
        <ul>
            <?php
            $pays = $_GET["pays"];
            for ($i = 0; $i < count($pays); $i++) {
                echo "<li>" . $pays[$i] . "</li>";
            }
            ?>
        </ul>

    </ul>
    <a href="formulaire.html">Essayer à nouveau</a>
</body>

</html>