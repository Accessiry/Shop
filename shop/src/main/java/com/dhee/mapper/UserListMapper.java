package com.dhee.mapper;

import com.dhee.entity.Member;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserListMapper {
    public List<Member> searchMember();

    //查询用户
    public List<Member> sMember(String name);

}
