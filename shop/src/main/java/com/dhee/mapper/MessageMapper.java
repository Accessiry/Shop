package com.dhee.mapper;

import com.dhee.entity.Message;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageMapper {
    //添加留言
    public int addMyMessage(Message message);
}
