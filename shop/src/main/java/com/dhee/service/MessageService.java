package com.dhee.service;

import com.dhee.entity.Message;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;


public interface MessageService {
    //添加留言
    public String addMyMessage(Message message, HttpServletRequest request);
}
