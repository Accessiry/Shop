package com.dhee.controller;

import com.dhee.entity.Category;
import com.dhee.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/index")
public class HomeController {
    @Autowired
    private HomeService homeService;
    @RequestMapping(value = "setTime.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public void setTime(){
    }
}
