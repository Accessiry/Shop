$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    $("#reg").click(function () {
        let username = $("#username").val()
        let password = $("#password").val()
        let password1 = $("#password1").val()
        let email = $("#email").val()

        if (username.trim() == '') {
            alert("请填写用户名")
            $("#username").focus()
            return
        }
        if (password.trim() == '') {
            alert("请填写密码")
            $("#password").focus();
            return
        }
        if (password != password1) {
            alert("两次输入的密码不一致")
            $("#password1").focus();
            return
        }
        if (email.trim() == '') {
            alert("请填写邮箱地址")
            $("#email").focus()
            return
        } else {
            let pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            if (!pattern.test(email)) {
                alert("邮箱地址不合法")
                return
            }
        }

        $.ajax({
            type:"post",
            url:basePath + "/user/index/userReg.do",
            data:$("form[name='f1']").serialize(),
            dataType:"text",
            success:show,
        })
    })
})

function show(result) {
    alert(result)
}