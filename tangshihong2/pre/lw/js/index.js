//logo切换
var i=0;
var timer=setInterval(function(){
    i++;
    if(i%2==0){
        $("#mylogo").attr("src","img/lw1.png");
        $("#mylogo").css("margin-top","-20");
    }else{
        $("#mylogo").attr("src","img/welcome.png");
        $("#mylogo").css("margin-top","-0.5");
    }
},2000);
//获取当前日期
var time=new Date();
var date=time.toDateString();
$("#date").html(date);
//右下角广告
var adv=$("#adv");
$(window).load(function(){
    adv.css("bottom",0);
});
adv.on("click","a", function (e) {
    e.preventDefault();
    adv.css("bottom","-200px");
    setTimeout(function () {
        adv.css("bottom",0);
    },5000);
});

