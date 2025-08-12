package com.dhee.service;

import com.dhee.entity.Member;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface UserListService {
    List<Member> searchMember();

    List<Member> sMember(String name);
}
