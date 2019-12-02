<?php
 header("Content-Type:application/json;charset=utf-8");
 $host = "52.69.108.239";
 $username = "tangshihong2";
 $password = "tangshihong2";
 $dbName = "tangshihong2";
 $port = 3306;
 $conn = mysqli_connect($host,$username,$password,$dbName,$port);
 mysqli_query($conn,"SET NAMES UTF8");
?>