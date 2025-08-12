package com.dhee.service;

import com.dhee.entity.Member;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public interface UserService {

    //用户注册
    String userReg(Member member);

    //用户查询
    String userLogin(Member member, HttpServletRequest request);

    //用户首页登录信息显示
    String userShow(HttpServletRequest request);

}
