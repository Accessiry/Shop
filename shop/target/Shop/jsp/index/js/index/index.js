$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


        $.ajax({
            type:"post",
            url:basePath + "/user/index/userShow.do",
            data:"",
            dataType:"text",
            success:showMember,
            error:function (e) {
                alert(e)
            }
        })
        //提交服务端查询全部商品分类
        $.ajax({
            type:"post",
            url:basePath + "/index/selALLCategory.do",
            data:"",
            dataType:"json",
            success:showCategory
        })
    //查询6层楼商品信息（数码家电）
    $.ajax({
        type:"post",
        url:basePath + "/index/indexProduct.do",
        data:"",
        dataType:"json",
        success:showSixProduct
    })

    //搜索
    $("#p_search").click(function (){
        var pname=$("#pname").val();
        window.location.href=basePath+"/jsp/index/categoryList.jsp?pname="+encodeURI(encodeURI(pname));

    })

    $("#myCart").click()(function (){
        window.location.href=basePath+"/jsp/index/myCart.jsp";
    })
})

function showSixProduct(result){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    var digital_obj=result["digitalList"];
    var str="";
    str+="<ul>";
    for (var i=0;i<digital_obj.length;i++) {
        str += "<li>";
        str += "<div class=\"name\"><a href=\"#\">"+digital_obj[i].name+"</a></div>";
        str += "<div class=\"price\">";
        str += "<font>￥<span>"+digital_obj[i].price+"</span></font> &nbsp; "+digital_obj[i].type+"";
        str += "</div>";
        str += "<div class=\"img\"><a href=\"#\"><img src=\""+basePath+digital_obj[i].imgPath+"/"+digital_obj[i].img+"\" width=\"185\" height=\"155\"/></a></div>";
        str += "</li>";
    }
    str+="</ul>";

    $("#digital").empty();
    $("#digital").append(str);
}

//商品分类显示
function showCategory(result){
    var obj=eval(result);
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    let str="";
    str+="<ul>";
    for(var i=0;i<obj.length;i++) {
        str += "<li>";
        str += "<div class=\"fj\">";
        str += "<span class=\"n_img\"><span></span><img src=\"" + basePath + "/jsp/index/resource/images/nav"+(i+1)+".png\"/></span>";
        str += "<span classe=\"fl\" onclick='selByCid("+obj[i].id+")'>  "+obj[i].name+"</span>";
        str += "</div>";
        str += "</li>";
    }
    str+="</ul>";
    $("#categoryContent").empty();
    $("#categoryContent").html(str);
}

//连接到分类商品页面
function selByCid(cid){
    let location1 = (window.location + '').split('/')
    let basePath = location1[0] + '//' + location1[2] + '/' + location1[3]

    location.href=basePath+"/jsp/index/categoryList.jsp?cid="+cid;


}



function showMember(result) {
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


}