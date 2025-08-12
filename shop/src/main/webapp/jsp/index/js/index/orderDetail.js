$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    //接受订单号
    var oid=getParam("oid");
    //查询订单详情
    $.ajax({
        type: "post",
        url: basePath + "/index/product/selOrderDetail.do",
        data: {"oid":oid},
        dataType: "json",
        success: showOrderDetail,
    })

})

function showOrderDetail(result){

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    var obj=eval(result);
    var str="";
    str+="<div class=\"two_t\">";
    str+="<span class=\"fr\"></span>商品列表";
    str+="</div>";
    str+="<table border=\"0\" class=\"car_tab\" style=\"width:1110px;\" cellSpacing=\"0\" cellPadding=\"0\">";
    str+="<tr>";
    str+="<td class=\"car_th\" width=\"550\">商品名称</td>";
    str+="<td class=\"car_th\" width=\"140\">属性</td>";
    str+="<td class=\"car_th\" width=\"150\">购买数量</td>";
    str+="<td class=\"car_th\" width=\"130\">小计</td>";
    str+="</tr>";
    var sum=0.0;

    for(var i=0;i<obj.length;i++){

        str+="<tr>";
        str+="<td>";
        str+="<div class\=\"c_s_img\"><img src=\""+basePath+obj[i].product.imgPath+"/"+obj[i].product.img+"\" width=\"73\" height=\"73\"/></div>";
        str+=obj[i].product.name;
        str+="</td>";
        str+="<td align=\"center\">颜色："+obj[i].product.color+"</td>";
        str+="<td align=\"center\">"+obj[i].num+"</td>";
        var pmoney=obj[i].num*obj[i].product.price;
        sum+=pmoney;
        str+="<td align=\"center\" style=\"color:#ff4e00;\">￥"+pmoney+"</td>";
        str+="</tr>";


    }
    str+="<tr>";
    str+="<td colSpan=\"4\" align=\"right\" style=\"font-family:'Microsoft YaHei';\">商品总价：￥"+sum+"";
    str+="</td>";
    str+="</tr>";
    str+="</table>";

    $("#orderDetail").empty();
    $("#orderDetail").append(str);
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