<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data</title>
</head>
<body>
    <h1>Data</h1>

    <?php
    echo("<br>Code Representation of PHP Development");

    ?>

    <?php
    $conn = new mysqli("localhost","root", "");

    if($conn->connect_error){

        die("<br>connection failed: " .$conn->connect_error);
    }
    echo("<br>Connection successfull");

    $sql = "CREATE DATABASE myPrac";

    if ($conn->query($sql)===TRUE){
        echo("Database created successfully");
    }else{
        echo("Error creating database" .$conn->error);
    }

    ?>
</body>
</html>