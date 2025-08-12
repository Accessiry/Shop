$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $.ajax({
        type: "post",
        url: basePath + "/index/userList.do",
        data: "",
        dataType: "json",
        success: showUser,

    })

    $("#m_search").click(function (){
        var name=$("#mname").val();
        $.ajax({
            type:"post",
            url:basePath + "/index/userSearch.do",
            data:{"name":name},
            dataType:"json",
            success:showUser
        })

    })
})

function showUser(result){
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    var obj=eval(result);
    var str="";
    for(var i=0;i<obj.length;i++) {
        str += "<tr>";
        str += "<td>"+obj[i].id+"</td>";
        str += "<td><u style=\"cursor:pointer\" class=\"text-primary\" >"+obj[i].username+"</u></td>";
        str += "<td>"+obj[i].name+"</td>";
        str += "<td>"+obj[i].tel+"</td>";
        str += "<td>"+obj[i].email+"</td>";
        // str = "<td class=\"td-status\"><span class=\"label label-success radius\">已启用</span></td>";
        str += "<td class=\"td-manage\">";

        str += "<a title=\"编辑\" onClick=\"member_edit('550')\" href=\"javascript:;\" class=\"btn btn-xs btn-info\">";
        str += "<i class=\"icon-edit bigger-120\"></i></a>";
        str += "<a title=\"删除\" href=\"javascript:;\" onClick=\"member_del(this,'1')\" class=\"btn btn-xs btn-warning\">";
        str += "<i class=\"icon-trash  bigger-120\"></i></a>";
        str += "</td>";
        str += "</tr>";
    }

    $("#userList").empty();
    $("#userList").append(str);
    $("#count").empty();
    $("#count").append(obj.length);
    $("#memNum").empty();
    $("#memNum").append(obj.length);
}

function member_edit(){

}