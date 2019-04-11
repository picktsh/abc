//网络特效背景
$("#rian").load("./data/html/background1.html",function(){

    document.body.appendChild();
})
    //雨天背景
(function(){
    $("#rian").load("./data/html/rian.html",function(){
        var link=document.createElement("link");
        link.rel="stylesheet";
        link.href="./data/css/rian.css";
        document.head.appendChild(link);
    })
})()