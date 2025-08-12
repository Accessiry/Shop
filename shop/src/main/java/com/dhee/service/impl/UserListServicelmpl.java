package com.dhee.service.impl;

import com.dhee.entity.Member;
import com.dhee.mapper.UserListMapper;
import com.dhee.mapper.UserMapper;
import com.dhee.service.UserListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class UserListServicelmpl implements UserListService {
    @Autowired
    private UserListMapper userListMapper;
    @Override
    public List<Member> searchMember() {
        return userListMapper.searchMember();
    }


    @Override
    public List<Member> sMember(String name) {
        return userListMapper.sMember(name);
    }
}
