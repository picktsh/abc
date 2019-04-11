<?php
require_once("./init.php");
@$user_name=$_REQUEST["user_name"];
@$reg='/^[a-zA-Z0-9]{6,12}$/';
@$rs=preg_match($reg,$user_name);
if(!$rs){die(json_encode('{"code":-1,"msg":"用户名不符合规则"}'));}
@$sql="select count(user_name) from user where user_name='$user_name'";
@$result=mysqli_query($conn,$sql);
@$row=mysqli_fetch_row($result);
if(mysqli_error($conn)){
	die(mysqli_error($conn));
}
if($row[0]>=1){
	echo json_encode('{"code":-1,"msg":"该用户已存在"}');
}else{
	echo json_encode('{"code":1,"msg":"用户名可用"}');
}
