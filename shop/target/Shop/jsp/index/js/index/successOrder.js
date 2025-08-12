$(document).ready(function () {

    let location = (window.location + '').split('/')
    let basePath = location[0] + '//' + location[2] + '/' + location[3]

    //查询相应分类商品
    //接受分类id
    var orderNo=getParam("orderNo");
    var countMoney=getParam("countMoney");

    $("#orderNo").empty();
    $("#orderNo").append("感谢您在本店购物！您的订单已提交成功，请记住您的订单号: <font color=\"#ff4e00\">"+orderNo+"</font>");

    $("#countMoney").empty();
    $("#countMoney").append("您的应付款金额为: <font color=\"#ff4e00\">￥"+countMoney+"</font>");


})

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