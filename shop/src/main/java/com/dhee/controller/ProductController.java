package com.dhee.controller;

import com.dhee.entity.BuyCar;
import com.dhee.entity.MyOrder;
import com.dhee.entity.OrderDetail;
import com.dhee.entity.Product;
import com.dhee.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/index/product")
public class ProductController {

    @Autowired
    private ProductService productService;
    @RequestMapping(value = "selByCid.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public Map<String,Object> selByCid(Product product,Integer pageNow){
        return productService.selByCid(product,pageNow);
    }


    @RequestMapping(value = "productDetail.do", produces = "application/json;charset=utf-8")
    @ResponseBody

    public Product productDetail(Integer id){
        return productService.productDetail(id);
    }


    @RequestMapping(value = "addCart.do", produces = "application/json;charset=utf-8")
    @ResponseBody

    public Map<String, Object> addCart(BuyCar buyCar, HttpServletRequest request){
        return productService.addCart(buyCar,request);
    }

    @RequestMapping(value = "myCart.do", produces = "application/json;charset=utf-8")
    @ResponseBody

    public Map<String, Object> myCart(HttpServletRequest request){
        return productService.myCart(request);
    }

    @RequestMapping(value = "delMyCart.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String delMyCart(Integer id){
        return productService.delMyCart(id);
    }

    @RequestMapping(value = "clearMyCart.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String clearMyCart(HttpServletRequest request){
        return productService.clearMyCart(request);
    }


    @RequestMapping(value = "confirmOrder.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public Map<String,Object> confirmOrder(MyOrder myOrder, HttpServletRequest request){
        return productService.addMyOrder(myOrder,request);
    }

    @RequestMapping(value = "selMyOrder.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public Map<String,Object> selMyOrder(HttpServletRequest request){
        return productService.selMyOrder(request);
    }


    @RequestMapping(value = "updateMyOrderState.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String updateMyOrderState(MyOrder myOrder){
        return productService.updateMyOrderState(myOrder);
    }

    @RequestMapping(value = "selOrderDetail.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<OrderDetail> selOrderDetail(Integer oid){
        return productService.selOrderDetail(oid);
    }




}
