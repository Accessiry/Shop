package com.dhee.service.impl;

import com.dhee.entity.BuyCar;
import com.dhee.entity.MyOrder;
import com.dhee.entity.OrderDetail;
import com.dhee.entity.Product;
import com.dhee.mapper.ProductMapper;
import com.dhee.service.ProductService;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.mysql.cj.xdevapi.JsonArray;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class ProductServicelmpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Override
    public Map<String,Object> selByCid(Product product,Integer pageNow){
        int page=0;
        if(pageNow==null){
            page=1;
        }else{
            page=pageNow;
        }

        PageHelper.startPage(page,8);
        List<Product> plist=productMapper.selByCid(product);

//        String p;
//        if(plist.size()>0) {
////            String p = plist.toString();
////            String q = p.substring(8);
////            q = "[" + q;
//            JSONArray jsonArray=JSONArray.fromObject(plist);
//            p=jsonArray.toString();
//
//        }
//        else {
//            return null;
//        }
//
//        ObjectMapper objectMapper=new ObjectMapper();
//        JavaType javaType = objectMapper.getTypeFactory().constructParametricType(ArrayList.class,Product.class);
//        List<Product> productList=null;
//        try {
//            productList=(List<Product>)objectMapper.readValue(p,javaType);
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        //总页数
//        int countPage=0;
//        if(productList.size()%8==0){
//            countPage=productList.size()/8;
//        }else{
//            countPage=productList.size()/8+1;
//        }
        //前8条记录

//        int start=(page-1)*8;
//        if(page==countPage){
//            productList=productList.subList(start,productList.size());
//        }else {
//            productList = productList.subList(start, 8);
//        }

        //总页数
        long countPage=0;
        PageInfo<Product> pageInfo=new PageInfo<Product>(plist);
        long total=pageInfo.getTotal();
        if(total%8==0){
            countPage=total/8;
        }else {
            countPage=total/8+1;
        }

        Map<String,Object> map=new HashMap<String,Object>();
        map.put("searchName",product.getName());
        map.put("productList",plist);
        map.put("countPage",countPage);
        map.put("pageNow",page);

        return map;

    }

    @Override
    public Product productDetail(Integer id) {
        return productMapper.productDetail(id);
    }

    @Override
    public Map<String, Object> addCart(BuyCar buyCar, HttpServletRequest request) {
        Map<String, Object> map=new HashMap<String, Object>();

        buyCar.setMid(1);

        //判断哟弄个胡是否加入过相同商品
        //如果加入更新数量
        if(productMapper.selCartByPidAndCid(buyCar).size()>0){
            productMapper.updateCart(buyCar);
        }else {
            //如果未加入直接添加
            productMapper.addCart(buyCar);
        }

        List<BuyCar> buyCarList= productMapper.selCarAndProduct(buyCar);
        map.put("c",buyCarList.size());//商品种类
        int count=0;
        Double money=0.0;
        for (BuyCar bc:buyCarList){
            count+=bc.getNum();
            money+=bc.getNum()*bc.getProduct().getPrice();
        }
        map.put("count",count);//商品总个数
        map.put("money",money);//商品总价钱

        map.put("msg","ok");
        return map;
    }

    @Override
    public Map<String, Object> myCart(HttpServletRequest request) {
        Map<String, Object> map=new HashMap<String, Object>();

        BuyCar buyCar=new BuyCar();
        buyCar.setMid(1);

        //查询购物车记录及商品信息
        List<BuyCar> buyCarList= productMapper.selCarAndProduct(buyCar);
        map.put("buyCartList",buyCarList);//商品种类

        map.put("msg","ok");
        return map;
    }

    @Override
    public String delMyCart(Integer id) {
        int i=productMapper.delMyCart(id);
        if(i>0){
            return "ok";
        }
        else {
            return "error";
        }
    }

    @Override
    public String clearMyCart(HttpServletRequest request) {
        productMapper.clearMyCart(1);
        String result="ok";

        return result;
    }

//    @Transactional(propagation = Propagation.REQUIRED,isolation = Isolation.DEFAULT,readOnly = false)
    @Override
    public Map<String, Object> addMyOrder(MyOrder myOrder, HttpServletRequest request) {
        Map<String,Object> map=new HashMap<String,Object>();

        myOrder.setMid(1);
        myOrder.setState(1);
        myOrder.setTime(new Date());
        productMapper.addMyOrder(myOrder);

        //订单添加
        map.put("orderNo",myOrder.getId());
        //订单详情查询
        BuyCar buyCar=new BuyCar();
        buyCar.setMid(1);
        List<BuyCar> carList= productMapper.selCarAndProduct(buyCar);
        Double countmoney=0.0;
        for (BuyCar c:carList){
            OrderDetail detail=new OrderDetail();
            detail.setPid(c.getPid());
            detail.setOid(myOrder.getId());
            detail.setNum(c.getNum());
            productMapper.addOrderDetail(detail);
            //库存更新
            Product product=new Product();
            product.setId(c.getPid());
            product.setNumber(c.getNum());
            productMapper.updateProductNum(product);

            countmoney+=c.getNum()*c.getProduct().getPrice();
        }

        //购物车清空
        productMapper.clearMyCart(1);

        //返回页面所需数据
        map.put("orderNo",myOrder.getId());
        map.put("countMoney",countmoney);

        return map;
    }

    @Override
    public Map<String, Object> selMyOrder(HttpServletRequest request) {
        Map<String,Object> map=new HashMap<String,Object>();
        List<MyOrder> myOrderList=productMapper.selMyOrder(1);
        map.put("myOrderList",myOrderList);
        return map;
    }

    @Override
    public String updateMyOrderState(MyOrder myOrder) {
        int i=productMapper.updateMyOrderState(myOrder);
        if (i>0){
            return "success";
        }else {
            return "error";
        }
    }

    @Override
    public List<OrderDetail> selOrderDetail(Integer oid) {
        return productMapper.selOrderDetail(oid);
    }

    @Override
    public Map<String,Object> selIndexDigital() {
        List<Product> digitalList=productMapper.selIndexDigital();
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("digitalList",digitalList);
        return map;
    }
}

