<?php
//完成后台管理员登录验证
require_once("./init.php");
//验证阶段
/*@$code=$_SESSION["code"];
@$yzm=$_REQUEST["yzm"];
if($code!=$yzm){
	die('{"code":-1,"msg":"验证码输入有误"}');
}*/

@$user_name=$_REQUEST["user_name"];
@$user_pwd=$_REQUEST["user_pwd"];
@$reg='/^[a-zA-Z0-9]{3,12}$/';
@$rs=preg_match($reg,$user_name);
if(!$rs){
	die('{"code":-1,"msg":"用户名不符合规则"}');
}
@$rs=preg_match($reg,$user_pwd);
if(!$rs){
	die('{"code":-1,"msg":"密码不符合规则"}');
}
@$sql="select count(user_id) as c from user where user_name='$user_name' and user_pwd=md5('$user_pwd')";
@$result=mysqli_query($conn,$sql);
@$row=mysqli_fetch_row($result);
if(mysqli_error($conn)){
	die(mysqli_error($conn));
}
if($row[0]==1){
	echo json_encode('{"code":1,"msg":"登陆成功"}');
}else{
	echo json_encode('{"code":-1,"msg":"用户名或密码错误"}');
}
