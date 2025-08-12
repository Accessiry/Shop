$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]

    var pid=getParam("pid");
    //提交到服务器端查询
    $.ajax({
        type:"post",
        url:basePath + "/index/product/productDetail.do",
        data:{"id":pid},
        dataType:"json",
        success:showDetail,
    })

    //数量增加
    $("#addUpdate").click(function (){
        var c = $(".n_ipt").val();
        c=parseInt(c)+1;
        $(".n_ipt").val(c);
    })
    //数量减少
    $("#jianUpdate").click(function (){
        var c = $(".n_ipt").val();
        if(c==1){
            c=1;
        }else{
            c=parseInt(c)-1;
            $(".n_ipt").val(c);
        }
    })

    //加入购物车按钮
    $("#showDiv").click(function(){
        var n=$("#num").val();

        $.ajax({
            type:"post",
            url:basePath + "/index/product/addCart.do",
            data:{"pid":pid,"num":n},
            dataType:"json",
            success:showCart,
        })


    })

    //关闭 加入购车 窗口
    $("#closeDiv").click(function(){
        $("#MyDiv1").attr("style","display:none");
        $("#fade1").attr("style","display:none");
    })



})

//弹出购物车窗口
function  showCart(result){

    $("#cartmsg").empty();
    $("#cartmsg").append("<span style=\"color:#3e3e3e; font-size:18px; font-weight:bold;\">宝贝已成功添加到购物车</span><br />\n" +
        "    购物车共有"+result['c']+"种宝贝（"+result['count']+"件） &nbsp; &nbsp; 合计："+result['money']+"元")



    $("#MyDiv1").attr("style","display:block");
    $("#fade1").attr("style","display:block");
    var bgdiv = $("#fade1");
    bgdiv.style.width = document.body.scrollWidth;
    // bgdiv.style.height = $(document).height();
    $("#fade1").height($(document).height());
}


//显示商品详情
function showDetail(result) {
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]

    var obj=eval(result);
    var p_name=obj.name;
    var p_price=obj.price;
    var p_type=obj.type;
    var p_color=obj.color;
    var imgPath=obj.imgPath+"/"+obj.img;


    var str="<a href=\""+basePath+"/resource/images/p_big.jpg\" title=\"/resource/images\" class=\"MagicZoom\" id=\"MagicZoom\">" +
    "<img src=\""+basePath+imgPath+"\" width=\"390\" height=\"390\"/></a></div>";
    $("#tsImgS").empty();
    $("#tsImgS").append(str);

    $("#p_name").empty();
    $("#p_name").append("<p>"+p_name+"</p>");

    $("#p_price").empty();
    $("#p_price").append("本店价格：<b>￥"+p_price+"</b>");

    $("#p_type").empty();
    $("#p_type").append("<span class=\"fl\">型号：</span>\n" +
        "        <ul>\n" +
        "          <li >"+p_type+"<div class=\"ch_img\"></div></li>\n" +
        "        </ul>");

    $("#p_color").empty();
    $("#p_color").append("<span class=\"fl\">颜色：</span>\n" +
        "        <ul>\n" +
        "          <li>"+p_color+"<div class=\"ch_img\"></div></li>\n" +
        "        </ul>");


}


function getParam(paramName){
    paramValue="";
    isFound=false;
    if (this.location.search.indexOf("?") == 0
        && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    return paramValue;

}
