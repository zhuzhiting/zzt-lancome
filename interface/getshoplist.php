<?php
    header("Content-type:text/html;charset=utf-8");
    $link = mysqli_connect('localhost','root','root','shop'); //连接数据库

    $flag = $_GET['flag'];
    
    if($flag=='car'){
        // 获取
        $sql = "SELECT * FROM cart";
        $res = mysqli_query($link,$sql);

        if($res){	
            $arr = mysqli_fetch_all($res, MYSQL_ASSOC);
            echo json_encode(array("code"=>1,"data"=>$arr));
        }else{	
            echo json_encode(array("code"=>0));
        }
    } else {
        // 删除
        $id = $_GET['id'];
        // 再传一个count
        $sql = "DELETE FROM `cart` WHERE `product_id`=$id";
        $result = mysqli_query($link,$sql);
        if($result){
            echo json_encode(array("code"=>1));
        }else{
            echo json_encode(array("code"=>0));
        }
    }






?>