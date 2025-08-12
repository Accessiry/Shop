package com.dhee.controller;

import com.dhee.entity.Member;
import com.dhee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("user/index")
public class UserController {


    //用户注册

    @Autowired
    private UserService userService;
    @RequestMapping(value = "userReg.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String userReg(Member member) {
        return userService.userReg(member);
    }

    @RequestMapping(value = "userLogin.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String userLogin(Member member, HttpServletRequest request) {
        return userService.userLogin(member, request);
    }

    //用户首页
    @RequestMapping(value = "userShow.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String userShow(HttpServletRequest request) {
        return userService.userShow(request);
    }
}
