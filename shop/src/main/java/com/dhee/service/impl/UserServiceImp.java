package com.dhee.service.impl;

import com.dhee.entity.Member;
import com.dhee.mapper.UserMapper;
import com.dhee.service.UserService;
import com.dhee.utils.SqlSessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpServletRequest;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserMapper userMapper;



    public UserServiceImp(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public String userReg(Member member) {
        if (userMapper.getUsername(member) == null) {
            userMapper.userReg(member);
            return "注册成功";
        }
        return "用户名已存在";
    }

    @Override
    public String userLogin(Member member, HttpServletRequest request) {
        Member m = userMapper.userLogin(member);
        if (m != null) {
            return "success";
        } else {
            return "error";
        }
    }

    @Override
    public String userShow(HttpServletRequest request) {
        return null;
    }
}
