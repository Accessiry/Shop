package com.dhee.controller;

import com.dhee.entity.Category;
import com.dhee.entity.Message;
import com.dhee.service.AdminMesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/index")
public class AdminMesController {
    @Autowired
    private AdminMesService adminMesService;

    @RequestMapping(value = "AdminMes.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Message> searchMes(){
        return adminMesService.searchMes();
    }

    @RequestMapping(value = "mesSearch.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Message> sMes(Integer id){
        return adminMesService.sMes(id);
    }
}
