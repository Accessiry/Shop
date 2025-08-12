$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $.ajax({
        type: "post",
        url: basePath + "/index/AdminMes.do",
        data: "",
        dataType: "json",
        success: showadminMes,

    })

    $("#m_search").click(function (){
        var id=$("#mid").val();
        $.ajax({
            type:"post",
            url:basePath + "/index/mesSearch.do",
            data:{"id":id},
            dataType:"json",
            success:showadminMes,
        })

    })
})

function showadminMes(result) {
    var obj=eval(result);
    var str="";
    for(var i=0;i<obj.length;i++) {
        str += "<tr>";
        str += "<td>"+obj[i].id+"</td>";
        str += "<td><u style=\"cursor:pointer\" class=\"text-primary\" >"+obj[i].title+"</u></td>";
        str += "<td class=\"text-l\">"+obj[i].content+"</td>";
        str += "<td>"+obj[i].date+"</td>";
        str += "<td>"+obj[i].mid+"</td>";
        str += "<td class=\"td-manage\">";
        str += "<a title=\"删除\" href=\"javascript:;\" class=\"btn btn-xs btn-warning\">";
        str += "<i class=\"icon-trash  bigger-120\"></i></a>";
        str += "</td>";
        str += "</tr>";
    }

    $("#adminMes").empty();
    $("#adminMes").append(str);
    $("#count").empty();
    $("#count").append(obj.length);

}