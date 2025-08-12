$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $.ajax({
        type: "post",
        url: basePath + "/index/AdminOrder.do",
        data: "",
        dataType: "json",
        success: showadminorder,

    })

    $("#o_search").click(function (){
        var id=$("#oname").val();
        $.ajax({
            type:"post",
            url:basePath + "/index/orderSearch.do",
            data:{"id":id},
            dataType:"json",
            success:showadminorder
        })

    })

})

function showadminorder(result){
    var obj=eval(result);
    var str="";
    for(var i=0;i<obj.length;i++) {
        str += "<tr>";
        str += "<td><a href=\"javascript:void()\" name=\"member_add\">"+obj[i].id+"</a></td>";
        str += "<td>"+obj[i].time+"</td>";
        str += "<td>"+obj[i].mid+"</td>";
        var c=0;
        if(obj[i].state==1){
            c="已付款";
        }else if(obj[i].state==2){
            c="已发货";
        }else if(obj[i].state==3){
            c="已收货";
        }else {
            c="未购物";
        }
        str += "<td class=\"td-status\"><span class=\"label label-success radius\">"+c+"</span></td>";
        str += "<td class=\"td-manage\">";
        // str += "<a  href=\"javascript:;\" title=\"发货\" class=\"btn btn-xs btn-success\">发货</a>";
        str += "<a title=\"删除\" href=\"javascript:;\" class=\"btn btn-xs btn-warning\"><i class=\"icon-trash  bigger-120\"></i></a>";
        str += "</td>";
        str += "</tr>";
    }
    $("#adminorder").empty();
    $("#adminorder").append(str);
    $("#count").empty();
    $("#count").append(obj.length);
    $("#orderNum").empty();
    $("#orderNum").append(obj.length);
}