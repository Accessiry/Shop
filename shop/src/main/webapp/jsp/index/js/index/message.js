$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $("#tj").click(function (){
        var c=$("#content").val();
        if (c.trim()==""){
            alert("请输入留言内容");
            $("#content").focus();
            return;
        }
        $.ajax({
            type: "post",
            url: basePath + "/index/message/myMessage.do",
            data: $("form[name='f1']").serialize(),
            dataType: "text",
            success: showResult,
        })
    })
    //留言

})

function showResult(result){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    if(result=="success"){
        alert("留言成功");
    }else{
        alert("留言失败");
    }
}