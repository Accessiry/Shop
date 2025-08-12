package com.dhee.controller;

import com.dhee.entity.Message;
import com.dhee.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/index/message")
public class MessageController {
    @Autowired
    private MessageService messageService;
    @RequestMapping(value = "myMessage.do", produces = "text/html;charset=utf-8")
    @ResponseBody
    public String myMessage(Message message, HttpServletRequest request){
        return messageService.addMyMessage(message,request);
    }
}
