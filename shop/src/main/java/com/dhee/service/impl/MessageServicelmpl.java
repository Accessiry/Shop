package com.dhee.service.impl;

import com.dhee.entity.Message;
import com.dhee.mapper.MessageMapper;
import com.dhee.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@Service
public class MessageServicelmpl implements MessageService {
    //添加我的留言
    @Autowired
    private MessageMapper messageMapper;
    @Override
    public String addMyMessage(Message message, HttpServletRequest request) {
        message.setMid(1);
        message.setDate(new Date());
        int i=messageMapper.addMyMessage(message);
        if(i>0){
            return "success";
        }else {
            return "error";
        }

    }
}
