$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    //查询我的订单
    $.ajax({
        type: "post",
        url: basePath + "/index/product/selMyOrder.do",
        data: "",
        dataType: "json",
        success: showMyOrder,
    })

})

function showMyOrder(result){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    var str="";
    var obj=result["myOrderList"];
    if(obj.length>0){

        str+="<div class=\"mem_tit\">我的订单</div>";
        str+="<table border=\"0\" class=\"order_tab\" style=\"width:1200px; text-align:center; margin-bottom:30px;\"cellSpacing=\"0\" cellPadding=\"0\">";
        str+="<tr>";
        str+="<td width=\"20%\">订单号</td>";
        str+="<td width=\"25%\">下单时间</td>";
        str+="<td width=\"25%\">订单状态</td>";
        str+="<td width=\"15%\">操作</td>";
        str+="</tr>";
        for (var i=0;i<obj.length;i++) {

            str += "<tr>";
            str += "<td><font color=\"#ff4e00\"><a href='"+basePath+"/jsp/index/orderDetail.jsp?oid="+obj[i].id+"'>"+obj[i].id+"</a></font></td>";
            str += "<td>"+obj[i].time+"</td>";
            var state=obj[i].state;
            if(state==1) {
                str += "<td>未确认，已付款，未发货</td>";
                str += "<td><a href='javascript:void(0)' onclick='changeState("+obj[i].id+",0)'>取消订单</a></td>";
            }
            else if (state==2){
                str += "<td>未确认，已付款，已发货</td>";
                str += "<td><a href='javascript:void(0)' onclick='changeState("+obj[i].id+",3)'>确认收货</a></td>";
            }
            else if(state==3)
            {
                str += "<td>已确认，已付款，已发货</td>";
                str += "<td>交易成功</td>";
            }else if(state==0){
                str += "<td>未确认，未付款，未发货</td>";
                str += "<td>已取消订单</td>";
            }
            str += "</tr>";
            // <tr>
            //     <td><font color="#ff4e00">2015092823056</font></td>
            //     <td>2015-09-26 16:45:20</td>
            //     <td>已确认，已付款，已发货</td>
            //     <td><font color="#ff4e00">已确认</font></td>
            // </tr>
        }
        str+="</table>";

    }else{
        str+="无任何订单";
    }
    $("#myOrder").empty();
    $("#myOrder").append(str);
}

function changeState(oid,sid){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    //提交订单到服务端
    $.ajax({
        type: "post",
        url: basePath + "/index/product/updateMyOrderState.do",
        data: {"id":oid,"state":sid},
        dataType: "text",
        success: showResult,
    })
}

function showResult(result){
    window.location.reload();
}