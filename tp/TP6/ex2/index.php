<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex2</title>
</head>

<body>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "test";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $db);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
    $query = "select * from etudiants";
    $result = mysqli_query($conn, $query);
    ?>
    <table border="1">
        <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Departement</th>
        </tr>
        <?php
            while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
            {    
                echo "<tr>";
                foreach ($row as $key => $value) {
                    echo "<td>".$value."</td>";
                }
                echo "</tr>";
            }
            mysqli_close($conn)
        ?>
    </table>
</body>

</html>