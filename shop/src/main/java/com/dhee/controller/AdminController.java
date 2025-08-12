package com.dhee.controller;

import com.dhee.entity.Admin;
import com.dhee.entity.Member;
import com.dhee.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("admin/index")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @RequestMapping(value = "adminLogin.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String adminLogin(Admin admin, HttpServletRequest request) {
        return adminService.adminLogin(admin, request);
    }

}
