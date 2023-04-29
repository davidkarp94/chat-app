<?php 

$conn = mysqli_connect("localhost", "root", "asd123", "chatapp");
if (!$conn) {
    echo "Database connected" . mysqli_connect_error();
}

?>