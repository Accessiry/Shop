$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $.ajax({
        type: "post",
        url: basePath + "/index/AdminCate.do",
        data: "",
        dataType: "json",
        success: showadmincate,

    })

    $("#c_search").click(function (){
        var name=$("#cname").val();
        $.ajax({
            type:"post",
            url:basePath + "/index/cateSearch.do",
            data:{"name":name},
            dataType:"json",
            success:showadmincate
        })

    })
})

function showadmincate(result) {
    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]
    var obj=eval(result);
    var str="";
    for(var i=0;i<obj.length;i++) {
        str+="<tr>";
        str+="<td>"+obj[i].id+"</td>";
        str+="<td><u style=cursor:pointer class=text-primary >"+obj[i].name+"</u></td>";
        str+="<td class=\"td-manage\">";
        str+="<a title=\"删除\" href=\"javascript:;\" class=\"btn btn-xs btn-warning\"><i class=\"icon-trash  bigger-120\"></i></a>";
        str+="</td>";
        str+="</tr>";
    }
    $("#admincategory").empty();
    $("#admincategory").append(str);
    $("#count").empty();
    $("#count").append(obj.length);
    $("#cateNum").empty();
    $("#cateNum").append(obj.length);

}
