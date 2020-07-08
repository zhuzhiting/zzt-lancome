<?php
header("Content-type:text/html;charset=utf-8");
$bool = $_POST['bool'];
$link = mysqli_connect('localhost','root','root','user');

if($bool=='1'||$bool=='0'){
    $username = $_POST['username'];
    $password = $_POST['password'];
}

if($bool=='1'){
    $sql = "SELECT * FROM `lcuser` WHERE `name`=$username AND `password`=$password";
    $res = mysqli_query($link,$sql);

    $arr = mysqli_fetch_all($res,MYSQL_ASSOC);

    $num = count($arr);
//   echo 123;
    echo $num;
}
else if($bool=='0'){
    // echo 111;
   /*  echo $bool;
    echo $username;
    echo $password; */
    $sql = "INSERT INTO `lcuser` VALUES (null,$username,$password)";
    $res = mysqli_query($link,$sql);
    /* if($res){

        echo 1;
    }else{
        echo 0;
    } */
    echo $res;
    
    
}

?>
