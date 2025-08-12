package com.dhee.controller;

import com.dhee.entity.Category;
import com.dhee.entity.MyOrder;
import com.dhee.entity.Product;
import com.dhee.service.AdminOrderService;
import com.dhee.service.AdminProService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/index")
public class AdminOrderController {

    @Autowired
    private AdminOrderService adminOrderService;
    @RequestMapping(value = "AdminOrder.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<MyOrder> searchOrder(){
        return adminOrderService.searchOrder();
    }

    @RequestMapping(value = "orderSearch.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<MyOrder> sOrder(Integer id){
        return adminOrderService.sOrder(id);
    }
}
