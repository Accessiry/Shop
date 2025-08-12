package com.dhee.mapper;

import com.dhee.entity.Member;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {


    //用户注册
    int userReg(Member member);

    //查询用户名

    Member getUsername(Member member);

    Member userLogin(Member member);

}
