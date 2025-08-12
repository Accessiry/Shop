package com.dhee.controller;

import com.dhee.entity.Category;
import com.dhee.entity.Member;
import com.dhee.service.AdminCateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/index")
public class AdminCateController {
    @Autowired
    private AdminCateService adminCateService;

    @RequestMapping(value = "AdminCate.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Category> searchCate(){
        return adminCateService.searchCate();
    }

    @RequestMapping(value = "cateSearch.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Category> sCate(String name){
        return adminCateService.sCate(name);
    }

}
