package com.dhee.service;

import com.dhee.entity.BuyCar;
import com.dhee.entity.MyOrder;
import com.dhee.entity.OrderDetail;
import com.dhee.entity.Product;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

public interface ProductService {
    //分类cid查询
    public Map<String,Object> selByCid(Product product,Integer pageNow);


    //查询商品详情
    public Product productDetail(Integer id);

    //加入购物车
    public Map<String,Object> addCart(BuyCar buyCar, HttpServletRequest request);

    //我的购物车
    public Map<String,Object> myCart(HttpServletRequest request);

    //删除购物记录
    public String delMyCart(Integer id);

    //清空购物记录
    public String clearMyCart(HttpServletRequest request);

    //生成订单
    public Map<String,Object> addMyOrder(MyOrder myOrder,HttpServletRequest request);

    //查询我的订单
    public Map<String,Object> selMyOrder(HttpServletRequest request);

    //更新订单
    public String updateMyOrderState(MyOrder myOrder);

    //订单详情
    public List<OrderDetail> selOrderDetail(Integer oid);

    //查询首页6F数码家电信息
    public Map<String,Object> selIndexDigital();

}
