<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Database</title>
</head>
<body>
    <h1>PHP Database Operations</h1>

    <?php
    // Establish connection to MySQL
    $conn = mysqli_connect("localhost", "root", "");

    if ($conn) {
        echo "Connection Successful<hr>";
    } else {
        die("Connection Error: " . mysqli_connect_error());
    }

    // Create database if not exists
    $sql1 = "CREATE DATABASE IF NOT EXISTS indexphp";
    if (mysqli_query($conn, $sql1)) {
        echo "Database creation successful<hr>";
    } else {
        die("Database creation error: " . mysqli_error($conn));
    }

    // Select database
    if (mysqli_select_db($conn, "indexphp")) {
        echo "Database selected successfully<hr>";
    } else {
        die("Database selection error: " . mysqli_error($conn));
    }

    // Create table if not exists
    $sql2 = "CREATE TABLE IF NOT EXISTS `PHP` (
        `A` VARCHAR(5) NOT NULL,
        `B` VARCHAR(5) NOT NULL,
        `C` VARCHAR(5) NOT NULL,
        `D` INT(5) NOT NULL,
        `E` INT(5) NOT NULL
    )";
    if (mysqli_query($conn, $sql2)) {
        echo "Table creation successful<hr>";
    } else {
        die("Table creation error: " . mysqli_error($conn));
    }

    // Insert values into table
    $sql3 = "INSERT INTO `PHP` (`A`, `B`, `C`, `D`, `E`) 
             VALUES ('Ara', 'Bat', 'Cow', 3, 4)";
    if (mysqli_query($conn, $sql3)) {
        echo "Table value insertion successful<hr>";
    } else {
        die("Table value insertion error: " . mysqli_error($conn));
    }

    // Display all rows in the table
    $sql4 = "SELECT * FROM `PHP`";
    $result = mysqli_query($conn, $sql4);

    $num = mysqli_num_rows($result);
    echo "The number of rows in the table is: " . $num . "<br><br>";

    echo "Table Data Before Update:<br>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "A: " . $row['A'] . ", B: " . $row['B'] . ", C: " . $row['C'] . ", D: " . $row['D'] . ", E: " . $row['E'] . "<br>";
    }
    echo "<hr>";

    // Update table values
    $updateSql = "UPDATE `PHP` SET `B` = 'Ball', `D` = 10 WHERE `A` = 'Ara'";
    if (mysqli_query($conn, $updateSql)) {
        echo "Table values updated successfully<hr>";
    } else {
        die("Update error: " . mysqli_error($conn));
    }

    // Display updated table values
    $result = mysqli_query($conn, $sql4); // Re-run SELECT query to fetch updated data
    echo "Table Data After Update:<br>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "A: " . $row['A'] . ", B: " . $row['B'] . ", C: " . $row['C'] . ", D: " . $row['D'] . ", E: " . $row['E'] . "<br>";
    }
    echo "<hr>";

    // Delete specific row
    $deleteSql = "DELETE FROM `PHP` WHERE `A` = 'Ara'";
    if (mysqli_query($conn, $deleteSql)) {
        echo "Record deleted successfully<hr>";
    } else {
        die("Deletion error: " . mysqli_error($conn));
    }

    // Display remaining table values after deletion
    $result = mysqli_query($conn, $sql4); // Re-run SELECT query to fetch remaining data
    echo "Table Data After Deletion:<br>";
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "A: " . $row['A'] . ", B: " . $row['B'] . ", C: " . $row['C'] . ", D: " . $row['D'] . ", E: " . $row['E'] . "<br>";
        }
    } else {
        echo "No records found<br>";
    }
    ?>

</body>
</html>
