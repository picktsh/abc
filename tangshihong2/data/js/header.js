(function(){
	$("#headerBox").load("./data/html/header.html",function(){
		// var link=document.createElement("link");
		// link.rel="stylesheet";
		// link.href="./data/css/bootstrap.css";
    // document.head.appendChild(link);
    });
	//导航栏主题更换
    setTimeout(function () {
        var sessSub=window.localStorage.subject;
        $("body").css("background",sessSub);
        var subject_text="";
        if(sessSub=="#0f467e"){subject_text="淅淅雨天"}else
        if(sessSub=="skyblue"){subject_text="蔚蓝天空"}else
        if(sessSub=="#2B2B2B"){subject_text="暗黑主题"}else
        if(sessSub=="#27AE60"){subject_text="清新绿野"}else
        if(sessSub=="#F2DEDE"){subject_text="暖暖少女"}else subject_text="清晰瓷白";
        $("#headerBox #subject-color").html(`${subject_text}<span class="caret">`);
        $("#headerBox #subject-color").attr("value",window.localStorage.subject);
    },10)
    $("#headerBox").on("click","#subject-color-list>li>a",function (e) {
        e.preventDefault();
        $("#subject-color").attr("value",$(this).attr("value")).html(`${$(this).html()}<span class="caret">`);
        window.localStorage.subject=$("#headerBox #subject-color").attr("value");
        $("body").css("background",$(this).attr("value"));
    })
    //导航栏登录
    $("#headerBox").on("click","#btn_login",function (e) {
        e.preventDefault();
        var data={};
        data.user_name=$("#headerBox #exampleInputUname").val();
        data.user_pwd=$("#headerBox #exampleInputPassword1").val();
        //用户名和密码验证
        var reg=/^[a-zA-Z0-9]{3,12}$/;
        if(!reg.test(data.user_name)){alert("用户名格式不正确!");return}
        if(!reg.test(data.user_pwd)){alert("密码格式不正确!");return}
        //发送异步登录请求
        $.ajax({
            type:"POST",
            url:'./data/php/login.php',
            data:data,
            dataType:"json",
            success:function(res){
                res=JSON.parse(res);
                console.log(res);
                if(res.code==1){
                    alert(res.msg);
                    $("[class=close]").click();//登陆成功后,点击关闭模态框
                }else{alert(res.msg)}
            },
            error:function(){alert("网络不好")}
        })
    })
})()
