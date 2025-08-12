<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2023/1/4
  Time: 13:34
  To change this template use File | Settings | File Templates.
--%>

<%@page isELIgnored="false"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <link type="text/css" rel="stylesheet" href="resource/css/style.css" />
  <!--<link rel="shortcut icon" href="resource/images/bitbug_favicon.ico" type="x-icon" />-->


  <title>华信</title>
  <script src="js/jquery-1.8.2.min.js"></script>
  <script src="js/index/userLogin.js"></script>
</head>
<body>
<!--Begin Header Begin-->
<div class="soubg">
  <div class="sou">
        <span class="fr">
        	<span class="fl">你好，请<a href="userLogin.jsp">登录</a>&nbsp; <a href="userReg.jsp" style="color:#ff4e00;">免费注册</a>&nbsp; </span>
            <span class="fl">|&nbsp;关注我们：</span>
            <span class="s_sh"><a href="#" class="sh1">新浪</a><a href="#" class="sh2">微信</a></span>
            <span class="fr">|&nbsp;<a href="#">手机版&nbsp;<img src="resource/images/s_tel.png" align="absmiddle" /></a></span>
        </span>
  </div>
</div>
<!--End Header End-->
<!--Begin Login Begin-->
<div class="log_bg">
  <div class="top">
    <div class="logo"><a href="Index.html"><img src="resource/images/logo.png" /></a></div>
  </div>
  <div class="login">
    <div class="log_img"><img src="resource/images/l_img.png" width="611" height="425" /></div>
    <div class="log_c">
      <form name="f1" method="post">
        <table border="0" style="width:370px; font-size:14px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr height="50" valign="top">
            <td width="55">&nbsp;</td>
            <td>
              <span class="fl" style="font-size:24px;">登录</span>
              <span class="fr">还没有商城账号，<a href="userReg.jsp" style="color:#ff4e00;">立即注册</a></span>
            </td>
          </tr>
          <tr height="70">
            <td>用户名</td>
            <td><input type="text" value="" class="l_user" id="username" name="username" /></td>
          </tr>
          <tr height="70">
            <td>密&nbsp; &nbsp; 码</td>
            <td><input type="password" value="" class="l_pwd" id="password" name="password" /></td>
          </tr>

          <tr height="60">
            <td>&nbsp;</td>
            <td><input type="button" value="登录" class="log_btn" id="ulogin" /></td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</div>
<!--End Login End-->
<!--Begin Footer Begin-->
<div class="btmbg">
  <div class="btm">
    备案/许可证编号：www.dhee.com   Copyright © 2015-2022 华信商城网 All Rights Reserved. 复制必究 , Technical Support: Dhee Group <br />
    <img src="resource/images/b_1.gif" width="98" height="33" /><img src="resource/images/b_2.gif" width="98" height="33" /><img src="resource/images/b_3.gif" width="98" height="33" /><img src="resource/images/b_4.gif" width="98" height="33" /><img src="resource/images/b_5.gif" width="98" height="33" /><img src="resource/images/b_6.gif" width="98" height="33" />
  </div>
</div>
<!--End Footer End -->

</body>
</html>
