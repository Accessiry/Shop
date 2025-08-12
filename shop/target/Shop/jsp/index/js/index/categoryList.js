var cid;
var pname;
$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]

    //查询相应分类商品
    //接受分类id
    cid=getParam("cid");
    //接收搜索名称
    pname=decodeURI(getParam("pname"));

    $.ajax({
        type:"post",
        url:basePath + "/index/product/selByCid.do",
        data:{"cid":cid,"name":pname},
        // dataType:"json",
        dataTypes:"json",
        success:showProduct,

    })

})
var countPage=0;
function showProduct(result){

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    let str="";

    var r=eval(result);
    var obj=r["productList"];
    countPage=r["countPage"];
    var pageNow=r["pageNow"];
    var psearch_name=r["searchName"]

    $("#pname").val(psearch_name);

    str+="<ul class=\"cate_list\">";
    if(obj!=null&&obj.length>0) {
        for (var i = 0; i < obj.length; i++) {
            str += "<li>";
            str += "<div class=\"img\"><a href=\""+basePath+"/jsp/index/productDetail.jsp?pid="+obj[i].id+"\"><img src=\""+basePath+obj[i].imgPath+"/"+obj[i].img+"\" width=\"210\" height=\"185\"/></a></div>";
            str += "<div class=\"price\">";
            str += "<font>￥<span>" + obj[i].price + "</span></font> &nbsp; 26R";
            str += "</div>";
            str += "<div class=\"name\"><a href=\"#\">" + obj[i].name + "</a></div>";
            str += "<div class=\"carbg\">";
            str += "<a href=\"#\" class=\"ss\">收藏</a>";
            str += "<a href=\"#\" class=\"j_car\">加入购物车</a>";
            str += "</div>";
            str += "</li>";
        }

        str += "</ul>";
        if(countPage!=1) {
            str += "<div class=\"pages\">";
            str += "<a href=\"javascript:void(0)\" class=\"p_pre\" onclick='upPage("+pageNow+")'>上一页</a>";
            for (var i = 1; i <= countPage; i++) {
                if (pageNow == i) {
                    str += "<a href=\"javascript:void(0)\" class=\"cur\" onclick='pageDate(" + i + ")'>" + i + "</a>";
                } else {
                    str += "<a href=\"javascript:void(0)\" onclick='pageDate(" + i + ")'>" + i + "</a>";
                }

            }
            str += "<a href=\"javascript:void(0)\" class=\"p_pre\" onclick='downPage("+pageNow+")'>下一页</a>";
            str += "</div>";
        }
    }
    else{
        str+="没有满足条件的商品";
    }

    $("#plist_cid").empty();
    $("#plist_cid").append(str);

}

//上一页
function upPage(pageNow){
    var p_pageNow=pageNow-1;
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    if(p_pageNow>0) {
        $.ajax({
            type: "post",
            url: basePath + "/index/product/selByCid.do",
            data: {"cid": cid, "name": pname, "pageNow": p_pageNow},
            // dataType:"json",
            dataTypes: "json",
            success: showProduct,

        })
    }else {
        alert("已经是第一页");
    }
}
//下一页
function downPage(pageNow){
    //var p_pageNow=parseInt(pageNow)+1;
    var p_pageNow=pageNow+1;
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    if(p_pageNow<=countPage) {
        $.ajax({
            type: "post",
            url: basePath + "/index/product/selByCid.do",
            data: {"cid": cid, "name": pname, "pageNow": p_pageNow},
            // dataType:"json",
            dataTypes: "json",
            success: showProduct,

        })
    }else {
        alert("已经到达尾页");
    }
}
//当前页码数据
function pageDate(pageNow){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    $.ajax({
        type:"post",
        url:basePath + "/index/product/selByCid.do",
        data:{"cid":cid,"name":pname,"pageNow":pageNow},
        // dataType:"json",
        dataTypes:"json",
        success:showProduct,

    })
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