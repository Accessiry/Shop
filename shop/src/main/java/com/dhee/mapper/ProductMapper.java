package com.dhee.mapper;

import com.dhee.entity.BuyCar;
import com.dhee.entity.MyOrder;
import com.dhee.entity.OrderDetail;
import com.dhee.entity.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductMapper {
    //根据分类id查询商品信息
    public List<Product> selByCid(Product product);
    //商品详情
    public Product productDetail(Integer id);
    //加入购物车
    public int addCart(BuyCar buyCar);

    //根据用户Id和商品id查询购物车信息
    public List<Product> selCartByPidAndCid(BuyCar buyCar);

    //更新购物车商品数量
    public int updateCart(BuyCar buyCar);

    //根据用户id查询购物车及商品信息
    public List<BuyCar> selCarAndProduct(BuyCar buyCar);

    //删除购物车记录
    public int delMyCart(Integer id);

    //清空购物车
    public int clearMyCart(Integer mid);

    //添加订单
    public int addMyOrder(MyOrder myOrder);

    //订单详情的添加
    public int addOrderDetail(OrderDetail orderDetail);

    //更新商品库存
    public  int updateProductNum(Product product);

    //查询用户的订单
    public List<MyOrder> selMyOrder(Integer mid);

    //更新订单状态
    public int updateMyOrderState(MyOrder myOrder);

    //查询订单详情
    public List<OrderDetail> selOrderDetail(Integer oid);

    //查询首页中6F数码家电信息
    public List<Product> selIndexDigital();

}
