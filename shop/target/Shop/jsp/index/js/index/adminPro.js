$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $.ajax({
        type: "post",
        url: basePath + "/index/AdminPro.do",
        data: "",
        dataType: "json",
        success: showadminpro,

    })

    $("#p_search").click(function (){
        var name=$("#pname").val();
        $.ajax({
            type:"post",
            url:basePath + "/index/proSearch.do",
            data:{"name":name},
            dataType:"json",
            success:showadminpro
        })

    })

    $("#p_search").click(function (){
        var name=$("#pname").val();
        $.ajax({
            type:"post",
            url:basePath + "/index/proSearch.do",
            data:{"name":name},
            dataType:"json",
            success:showadminpro
        })

    })

})

function showadminpro(result){

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    var obj=eval(result);
    var str="";
    for(var i=0;i<obj.length;i++) {
        str += "<tr>";
        str += "<td>" + obj[i].id + "</td>";
        str += "<td><u style=\"cursor:pointer\" class=\"text-primary\">" + obj[i].name + "</u></td>";
        str += "<td>" + obj[i].category.id + "</td>";
        str += "<td>" + obj[i].type + "</td>";
        str += "<td>" + obj[i].color + "</td>";
        str += "<td class=\"text-l\">" + obj[i].price + "</td>";
        str += "<td>" + obj[i].number + "</td>";
        str += "<td><img src=\"" + basePath + obj[i].imgPath + "/" + obj[i].img + "\" width=\"100\" height=\"100\"/></td>";
        str += "<td class=\"td-manage\">";
        str += "<a title=\"编辑\"  href=\"javascript:;\" class=\"btn btn-xs btn-info\"><i class\=\"icon-edit bigger-120\"></i></a>";
        str += "<a title=\"删除\" href=\"javascript:;\"  class=\"btn btn-xs btn-warning\"><i class=\"icon-trash  bigger-120\"></i></a>";
        str += "</td>";
        str += "</tr>";
    }
    $("#adminpro").empty();
    $("#adminpro").append(str);
    $("#count").empty();
    $("#count").append(obj.length);
}