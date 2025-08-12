package com.dhee.controller;


import com.dhee.entity.Category;
import com.dhee.entity.Product;
import com.dhee.service.AdminProService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/index")
public class AdminProController {
    @Autowired
    private AdminProService adminProService;
    @RequestMapping(value = "AdminPro.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Product> searchPro(){
        return adminProService.searchPro();
    }


    @RequestMapping(value = "proSearch.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Product> sPror(String name){
        return adminProService.sPro(name);
    }

    @RequestMapping(value = "insertPro.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Product> insertPro(Product product){
        return adminProService.insertPro(product);
    }

}
