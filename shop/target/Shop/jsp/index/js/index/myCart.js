$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    //查询我的购物车
    $.ajax({
        type: "post",
        url: basePath + "/index/product/myCart.do",
        data: "",
        dataType: "json",
        success: showMyCart,
    })
})

//显示我的购物车记录
function showMyCart(result){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]

    var obj=eval(result);
    var clist=obj["buyCartList"];
    var str="";
    if(clist.length>0){
        str += "<table border=\"0\" class=\"car_tab\" style=\"width:1200px; margin-bottom:50px;\" cellSpacing=\"0\" cellPadding=\"0\">";
        str += "<tr>";
        str += "<td class=\"car_th\" width=\"490\">商品名称</td>";
        str += "<td class=\"car_th\" width=\"140\">属性</td>";
        str += "<td class=\"car_th\" width=\"150\">购买数量</td>";
        str += "<td class=\"car_th\" width=\"130\">小计</td>";
        str += "<td class=\"car_th\" width=\"150\">操作</td>";
        str += "</tr>";
        var countMoney=0.0;
        for (var i = 0; i < clist.length; i++) {

            str += "<tr class=\"car_tr\">";
            str += "<td>";
            str += "<div class=\"c_s_img\"><img src=\""+basePath+clist[i].product.imgPath+"/"+clist[i].product.img+"\" width=\"73\" height=\"73\"/></div>";
            str += clist[i].product.name;
            str += "</td>";
            str += "<td align=\"center\">颜色：" + clist[i].product.color + "</td>";
            str += "<td align=\"center\">";
            str += "<div class=\"c_num\">";
            str += "<input type=\"text\" value=\"" + clist[i].num + "\" name=\"\" class=\"car_ipt\" disabled/>";
            str += "</div>";
            str += "</td>";
            var m=clist[i].num*clist[i].product.price;
            countMoney+=m;
            str += "<td align=\"center\" style=\"color:#ff4e00;\">￥"+m+"</td>";
            str += "<td align=\"center\"><a href=\"javascript:void(0)\" onclick='delMyCart("+clist[i].id+")'>删除</a></td>";
            str += "</tr>";
        }
        str += "<tr height=\"70\">";
        str += "<td colSpan=\"6\" style=\"font-family:'Microsoft YaHei'; border-bottom:0;\">";
        str += "<label class=\"r_rad\"><input type=\"checkbox\" name=\"clear\" id=\"clear\" onclick='clearMyCart()'/></label><label class=\"r_txt\">清空购物车</label>";
        str += "<span class=\"fr\">商品总价：<b style=\"font-size:22px; color:#ff4e00;\">￥"+countMoney+"</b></span>";
        str += "</td>";
        str += "</tr>";

        str += "<tr valign=\"top\" height=\"150\">";
        str += "<td colSpan=\"6\" align=\"right\">";
        str += "<a href=\""+basePath+"/jsp/index/index.jsp\"><img src=\""+basePath+"/jsp/index/resource/images/buy1.gif\"/></a>&nbsp; &nbsp;";
        str += "<a href=\""+basePath+"/jsp/index/confirmOrder.jsp\"><img src=\""+basePath+"/jsp/index/resource/images/buy2.gif\"/></a>";
        str += "</td>";
        str += "</tr>";
        str += "</table>";



    }else {
        str+="还未购买任何商品";


    }
    $("#myCart").empty();
    $("#myCart").append(str);
}

//删除购物记录
function delMyCart(bid){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]

    //删除
    $.ajax({
        type: "post",
        url: basePath + "/index/product/delMyCart.do",
        data: {"id":bid},
        dataType: "text",
        success: showDelMyCart,
    })
}

function showDelMyCart(result){
    if(result=="ok"){
        alert("删除成功");
        window.location.reload();

    }else {
        alert("删除失败");
    }
}

//清空购物记录
function clearMyCart(){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]

    if($("#clear").is(":checked")){
        if(confirm("确定清空购物车吗？")){
            //清空购物车
            $.ajax({
                type: "post",
                url: basePath + "/index/product/clearMyCart.do",
                data: "",
                dataType: "text",
                success: showclearMyCart,
            })
        }
    }

}

function showclearMyCart(result){
    if(result=="ok"){
        window.location.reload();
    }
}