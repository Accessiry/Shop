$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $.ajax({
        type: "post",
        url: basePath + "/index/setTime.do",
        data: "",
        dataType: "text",
        success: showTime,

    })

})

function showTime() {
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date = now.getDate();//得到日期
    var hour= now.getHours();//得到小时数
    var minute= now.getMinutes();//得到分钟数
    var second= now.getSeconds();//得到秒数
    var str="";
    str+="<button type=\"button\" class=\"close\" data-dismiss=\"alert\">";
    str+="<i class=\"icon-remove\"></i></button>";
    str+="<i class=\"icon-ok green\"></i>欢迎使用";
    str+="<strong class=\"green\">后台管理系统<small>(v1.2)</small>";
    str+="</strong>,你本次登陆时间为"+year+'年'+month+'月'+date+'日'+hour+'时'+minute+'分'+second+'秒'+"";
    $("#time").empty();
    $("#time").append(str);

}

function showDate(){


}