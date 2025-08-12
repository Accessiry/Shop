$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]


    $.ajax({
        type: "post",
        url: basePath + "/user/index/userShow.do",
        data: "",
        dataType: "text",
        success: showMember,
        error: function (e) {
            alert(e)
        }
    })


})

function showMember(){}

// < tr >
// < td > 1 < /td>
// <td><u style="cursor:pointer" className="text-primary"
//        onClick="member_show('张三','member-show.html','10001','500','400')">张三</u></td>
// <td>男</td>
// <td>13000000000</td>
// <td>admin@mail.com</td>
// <td className="text-l">北京市 海淀区</td>
// <td>2014-6-11 11:11:42</td>
// <td>普通用户</td>
// <td className="td-status"><span className="label label-success radius">已启用</span></td>
// <td className="td-manage">
//     <a onClick="member_stop(this,'10001')" href="javascript:;" title="停用" className="btn btn-xs btn-success"><i
//         className="icon-ok bigger-120"></i></a>
//     <a title="编辑" onClick="member_edit('550')" href="javascript:;" className="btn btn-xs btn-info"><i
//         className="icon-edit bigger-120"></i></a>
//     <a title="删除" href="javascript:;" onClick="member_del(this,'1')" className="btn btn-xs btn-warning"><i
//         className="icon-trash  bigger-120"></i></a>
// </td>
// </tr>
// <tr>
//     <td>2</td>
//     <td><u style="cursor:pointer" className="text-primary"
//            onClick="member_show('张小泉','member-show.html','1031','500','400')">张小泉</u></td>
//     <td>男</td>
//     <td>13000000000</td>
//     <td>admin@mail.com</td>
//     <td className="text-l">北京市 海淀区</td>
//     <td>2014-6-11 11:11:42</td>
//     <td>普通用户</td>
//     <td className="td-status"><span className="label label-success radius">已启用</span></td>
//     <td className="td-manage">
//         <a onClick="member_stop(this,'10001')" href="javascript:;" title="停用" className="btn btn-xs btn-success"><i
//             className="icon-ok bigger-120"></i></a>
//         <a title="编辑" onClick="member_edit('310')" href="javascript:;" className="btn btn-xs btn-info"><i
//             className="icon-edit bigger-120"></i></a>
//
//         <a title="删除" href="javascript:;" onClick="member_del(this,'1')" className="btn btn-xs btn-warning"><i
//             className="icon-trash  bigger-120"></i></a>
//     </td>
// </tr>
// <tr>
//     <td>3</td>
//     <td><u style="cursor:pointer" className="text-primary"
//            onClick="member_show('张小泉','member-show.html','10301','500','400')">张小泉</u></td>
//     <td>男</td>
//     <td>13000000000</td>
//     <td>admin@mail.com</td>
//     <td className="text-l">北京市 海淀区</td>
//     <td>2014-6-11 11:11:42</td>
//     <td>银牌用户</td>
//     <td className="td-status"><span className="label label-success radius">已启用</span></td>
//     <td className="td-manage">
//         <a onClick="member_stop(this,'10001')" href="javascript:;" title="停用" className="btn btn-xs btn-success"><i
//             className="icon-ok bigger-120"></i></a>
//         <a title="编辑" onClick="member_edit(,'410')" href="javascript:;" className="btn btn-xs btn-info"><i
//             className="icon-edit bigger-120"></i></a>
//
//         <a title="删除" href="javascript:;" onClick="member_del(this,'1')" className="btn btn-xs btn-warning"><i
//             className="icon-trash  bigger-120"></i></a>
//     </td>
// </tr>
// <tr>
//     <td>4</td>
//     <td><u style="cursor:pointer" className="text-primary"
//            onClick="member_show('张小泉','member-show.html','10001','500','400')">张小泉</u></td>
//     <td>男</td>
//     <td>13000000000</td>
//     <td>admin@mail.com</td>
//     <td className="text-l">北京市 海淀区</td>
//     <td>2014-6-11 11:11:42</td>
//     <td>银牌用户</td>
//     <td className="td-status"><span className="label label-success radius">已启用</span></td>
//     <td className="td-manage">
//         <a onClick="member_stop(this,'10001')" href="javascript:;" title="停用" className="btn btn-xs btn-success"><i
//             className="icon-ok bigger-120"></i></a>
//         <a title="编辑" onClick="member_edit('560')" href="javascript:;" className="btn btn-xs btn-info"><i
//             className="icon-edit bigger-120"></i></a>
//
//         <a title="删除" href="javascript:;" onClick="member_del(this,'1')" className="btn btn-xs btn-warning"><i
//             className="icon-trash  bigger-120"></i></a>
//     </td>
// </tr>
// <tr>
//     <td>5</td>
//     <td><u style="cursor:pointer" className="text-primary"
//            onClick="member_show('张小泉','member-show.html','10001','500','400')">张小泉</u></td>
//     <td>男</td>
//     <td>13000000000</td>
//     <td>admin@mail.com</td>
//     <td className="text-l">北京市 海淀区</td>
//     <td>2014-6-11 11:11:42</td>
//     <td>银牌用户</td>
//     <td className="td-status"><span className="label label-success radius">已启用</span></td>
//     <td className="td-manage">
//         <a onClick="member_stop(this,'10001')" href="javascript:;" title="停用" className="btn btn-xs btn-success"><i
//             className="icon-ok bigger-120"></i></a>
//         <a title="编辑" onClick="member_edit('510')" href="javascript:;" className="btn btn-xs btn-info"><i
//             className="icon-edit bigger-120"></i></a>
//
//         <a title="删除" href="javascript:;" onClick="member_del(this,'1')" className="btn btn-xs btn-warning"><i
//             className="icon-trash  bigger-120"></i></a>
//     </td>
// </tr>