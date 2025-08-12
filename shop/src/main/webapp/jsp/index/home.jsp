<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2023/1/9
  Time: 10:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <link href="adminresource/assets/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="adminresource/css/style.css"/>
  <link rel="stylesheet" href="adminresource/assets/css/ace.min.css" />
<%--  <link rel="stylesheet" href="adminresource/assets/css/font-awesome.min.css" />--%>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="adminresource/assets/css/codemirror.css" rel="stylesheet">
  <!--[if IE 7]>
  <link rel="stylesheet" href="adminresource/assets/css/font-awesome-ie7.min.css" />
  <![endif]-->
  <!--[if lte IE 8]>
  <link rel="stylesheet" href="adminresource/assets/css/ace-ie.min.css" />
  <![endif]-->
  <script src="adminresource/assets/js/ace-extra.min.js"></script>
  <!--[if lt IE 9]>
  <script src="adminresource/assets/js/html5shiv.js"></script>
  <script src="adminresource/assets/js/respond.min.js"></script>
  <![endif]-->
  <!--[if !IE]> -->
  <script src="adminresource/assets/js/jquery.min.js"></script>
  <script src="js/index/userList.js"></script>
  <script src="js/index/admincategory.js"></script>
  <script src="js/index/adminorder.js"></script>
  <script src="js/index/home.js"></script>
  <!-- <![endif]-->
  <script src="adminresource/assets/dist/echarts.js"></script>
  <script src="adminresource/assets/js/bootstrap.min.js"></script>
  <title></title>
</head>
<body>
<div class="page-content clearfix">
  <div class="alert alert-block alert-success" id="time">

  </div>
  <div class="state-overview clearfix">
    <div class="col-lg-3 col-sm-6">
      <section class="panel">
        <a href="userList.jsp" title="商城会员">
          <div class="symbol terques">
            <i class="icon-user">
              U
            </i>
          </div>
          <div class="value">
            <h1 id="memNum">34522</h1>
            <p>商城用户</p>
          </div>
        </a>
      </section>
    </div>
    <div class="col-lg-3 col-sm-6">
      <section class="panel">
        <a href="admincategory.jsp" title="商品种类">
        <div class="symbol red">
          <i class="icon-tags">
            C
          </i>
        </div>
        <div class="value">
          <h1 id="cateNum">140</h1>
          <p>商品种类</p>
        </div>
        </a>
      </section>
    </div>
    <div class="col-lg-3 col-sm-6">
      <section class="panel">
        <a href="adminorder.jsp" title="商品订单">
        <div class="symbol yellow">
          <i class="icon-shopping-cart">
            O
          </i>
        </div>
        <div class="value">
          <h1 id="orderNum">345</h1>
          <p>商城订单</p>
        </div>
      </section>
    </div>
    <div class="col-lg-3 col-sm-6">
      <section class="panel">
        <div class="symbol blue">
          <i class="icon-bar-chart">
            T
          </i>
        </div>
        <div class="value">
          <h1>￥34,500</h1>
          <p>交易记录</p>
        </div>
      </section>
    </div>
  </div>
  <!--实时交易记录-->
  <div class="clearfix">
    <!--<div class="t_Record">
      <div id="main" style="height:300px; overflow:hidden; width:100%; overflow:auto" ></div>
     </div> -->
    <div class="news_style">
      <div class="title_name">最新消息</div>
      <ul class="list">
        <li><i class="icon-bell red"></i><a href="#">7月共处理订单3451比，作废为...</a></li>
        <li><i class="icon-bell red"></i><a href="#">6月共处理订单3451比，作废为...</a></li>
        <li><i class="icon-bell red"></i><a href="#">后台管理系统正式开通。</a></li>
        <li><i class="icon-bell red"></i><a href="#">后台管理系统正式开通。</a></li>
        <li><i class="icon-bell red"></i><a href="#">后台管理系统正式开通。</a></li>
      </ul>
    </div>
  </div>
  <!--记录-->
  <div class="clearfix">

  </div>

</div>
</body>
</html>
<script type="text/javascript">
  //面包屑返回值
  var index = parent.layer.getFrameIndex(window.name);
  parent.layer.iframeAuto(index);
  $('.no-radius').on('click', function(){
    var cname = $(this).attr("title");
    var chref = $(this).attr("href");
    var cnames = parent.$('.Current_page').html();
    var herf = parent.$("#iframe").attr("src");
    parent.$('#parentIframe').html(cname);
    parent.$('#iframe').attr("src",chref).ready();;
    parent.$('#parentIframe').css("display","inline-block");
    parent.$('.Current_page').attr({"name":herf,"href":"javascript:void(0)"}).css({"color":"#4c8fbd","cursor":"pointer"});
    //parent.$('.Current_page').html("<a href='javascript:void(0)' name="+herf+" class='iframeurl'>" + cnames + "</a>");
    parent.layer.close(index);

  });
  $(document).ready(function(){

    $(".t_Record").width($(window).width()-640);
    //当文档窗口发生改变时 触发
    $(window).resize(function(){
      $(".t_Record").width($(window).width()-640);
    });
  });


</script>   
