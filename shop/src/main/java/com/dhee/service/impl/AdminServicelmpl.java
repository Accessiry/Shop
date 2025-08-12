package com.dhee.service.impl;

import com.dhee.entity.Admin;
import com.dhee.entity.Member;
import com.dhee.mapper.AdminMapper;
import com.dhee.mapper.UserMapper;
import com.dhee.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class AdminServicelmpl implements AdminService {

    @Autowired
    private AdminMapper adminMapper;

    public AdminServicelmpl(AdminMapper adminMapper) {
        this.adminMapper = adminMapper;
    }

    @Override
    public String adminLogin(Admin admin, HttpServletRequest request) {
        Admin a = adminMapper.adminLogin(admin);
        if (a != null) {
            return "success";
        } else {
            return "error";
        }
    }
}
