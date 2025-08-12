package com.dhee.controller;
import com.dhee.entity.Member;
import com.dhee.entity.OrderDetail;
import com.dhee.service.UserListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/index")
public class UserListController {
    @Autowired
    private UserListService userListService;

    @RequestMapping(value = "userList.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Member> searchMember(){
        return userListService.searchMember();
    }

    @RequestMapping(value = "userSearch.do", produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Member> sMember(String name){
        return userListService.sMember(name);
    }

}
