package com.dhee.service.impl;

import com.dhee.entity.Message;
import com.dhee.mapper.AdminMesMapper;
import com.dhee.service.AdminMesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminMessServicelmpl implements AdminMesService {
    @Autowired
    private AdminMesMapper adminMesMapper;
    @Override
    public List<Message> searchMes() {
        return adminMesMapper.searchMes();
    }

    @Override
    public List<Message> sMes(Integer id) {
        return adminMesMapper.sMes(id);
    }
}
