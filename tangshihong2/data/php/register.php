<?php
session_start();
//完成用户注册验证
require_once("./init.php");
//验证,码阶段
@$code=$_SESSION["code"];
@$yzm=$_REQUEST["yzm"];
//echo $code;
if($code!=$yzm){
	die(json_encode('{"code":-1,"msg":"验证码输入有误"}'));
}
@$user_name=$_REQUEST["user_name"];
@$user_pwd=$_REQUEST["user_pwd"];
@$user_qq=$_REQUEST["user_qq"];
@$user_image_url ="../img/user_image/default.png";
@$user_register_time=time();
@$user_last_update_time=time();
@$reg='/^[a-zA-Z0-9]{6,12}$/';
@$rs=preg_match($reg,$user_name);
if(!$rs){die(json_encode('{"code":-1,"msg":"用户名不符合规则"}'));}
@$rs=preg_match($reg,$user_pwd);
if(!$rs){die(json_encode('{"code":-1,"msg":"密码不符合规则"}'));}
@$sql="insert into user (user_name,user_pwd,user_qq,user_image_url,user_register_time,user_last_update_time)";
$sql.=" values ('$user_name',md5('$user_pwd'),'$user_qq','$user_image_url','$user_register_time','$user_last_update_time')";
@$rs=mysqli_query($conn,$sql);
if(mysqli_error($conn)){
	echo mysqli_error($conn);
}
//4.返回json
@$count=mysqli_affected_rows($conn);
if($count>0){
	echo json_encode('{"code":1,"msg":"注册成功!!!"}');
}else{
	echo json_encode('{"code":-1,"msg":"注册失败!可能用户名已存在!"}');
}