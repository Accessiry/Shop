$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $.ajax({
        type:"post",
        url:basePath + "/index/product/myCart.do",
        data:"",
        // dataType:"json",
        dataTypes:"json",
        success:showProduct,
    })

    //获取地址
    // $.ajax({
    //     type:"post",
    //     url:basePath + "/index/product/myCart.do",
    //     data:"",
    //     // dataType:"json",
    //     dataTypes:"json",
    //     success:showProduct,
    // })

    $("#confirmOrder").click(function() {
        var person=$("#person").val();
        var tel=$("#tel").val();
        var address=$("#address").val();
        if(person==""){
            alert("请填写收货人");
            $("#person").focus();
            return;
        }
        if(tel==""){
            alert("请填写联系方式");
            $("#tel").focus();
            return;
        }
        if(address==""){
            alert("请填写地址");
            $("#address").focus();
            return;
        }
        var str=person+","+tel+","+address;
        $.ajax({
            type:"post",
            url:basePath + "/index/product/confirmOrder.do",
            data:{"address":str},
            // dataType:"json",
            dataTypes:"json",
            success:showOrder,
        })

    })

})

function showOrder(result){
    var orderNo=result["orderNo"];
    var countMoney=result["countMoney"];
    window.location.href="successOrder.jsp?orderNo="+orderNo+"&countMoney="+countMoney;
}

function showProduct(result){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]

    var obj=eval(result);
    var clist=obj["buyCartList"];
    var str="";
    str+="<table border=\"0\" class=\"car_tab\" style=\"width:1110px;\" cellSpacing=\"0\" cellPadding=\"0\">";
    str+="<tr>";
    str+="<td class=\"car_th\" width=\"550\">商品名称</td>";
    str+="<td class=\"car_th\" width=\"140\">属性</td>";
    str+="<td class=\"car_th\" width=\"150\">购买数量</td>";
    str+="<td class=\"car_th\" width=\"130\">小计</td>";
    str+="</tr>";

    var countMoney=0.0;
    for(var i=0;i<clist.length;i++) {

        str+="<tr class=\"car_tr\">";
        str+="<td>";
        str+="<div class=\"c_s_img\"><img src=\""+basePath+clist[i].product.imgPath+"/"+clist[i].product.img+"\" width=\"73\" height=\"73\"/></div>";
        str+=clist[i].product.name;
        str+="</td>";
        var m=clist[i].num*clist[i].product.price;
        countMoney+=m;
        str+="<td align=\"center\">颜色：" + clist[i].product.color + "</td>";
        str+="<td align=\"center\">" + clist[i].num + "</td>";
        str+="<td align=\"center\" style=\"color:#ff4e00;\">￥"+m+"</td>";
        str+="</tr>";
    }
    str+="<tr>";
    str+="<td colSpan=\"4\" align=\"right\" style=\"font-family:'Microsoft YaHei';\">";
    str+="商品总价：￥"+countMoney+"";
    str+="</td>";
    str+="</tr>";
    str+="</table>";

    $("#plist").empty();
    $("#plist").append(str);

    $("#money").empty();
    $("#money").append("应付款金额：<span style=\"font-size:22px; color:#ff4e00;\">￥"+countMoney+"</span>");

}