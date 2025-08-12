package com.dhee.mapper;

import com.dhee.entity.Category;
import com.dhee.entity.Message;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminMesMapper {
    public List<Message> searchMes();

    public List<Message> sMes(Integer id);
}
