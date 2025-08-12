package com.dhee.service;

import com.dhee.entity.Admin;
import com.dhee.entity.Member;

import javax.servlet.http.HttpServletRequest;

public interface AdminService {

    //用户查询
    String adminLogin(Admin admin, HttpServletRequest request);
}
