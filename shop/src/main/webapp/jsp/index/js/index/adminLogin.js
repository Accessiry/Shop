$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    $("#login_btn").click(function () {
        let username = $("#username").val()
        let password = $("#password").val()

        if (username.trim() == '') {
            alert("请填写管理员姓名")
            $("#username").focus()
            return
        }
        if (password.trim() == '') {
            alert("请填写密码")
            $("#password").focus();
            return
        }

        $.ajax({
            type:"post",
            url:basePath + "/admin/index/adminLogin.do",
            data:$("form[name='f1']").serialize(),
            dataType:"text",
            success:show,
            error:function (e) {
                alert(e)
            }
        })
    })
})

function show(result) {
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    if(result=="success"){
        window.parent.location.href=basePath+"/jsp/index/adminIndex.jsp";

    }else{
        alert("登陆失败");
    }


}