package com.dhee.service.impl;

import com.dhee.entity.MyOrder;
import com.dhee.mapper.AdminOrderMapper;
import com.dhee.service.AdminOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminOrderServicelmpl implements AdminOrderService {
    @Autowired
    private AdminOrderMapper adminOrderMapper;
    @Override
    public List<MyOrder> searchOrder() {
        return adminOrderMapper.searchOrder();
    }

    @Override
    public List<MyOrder> sOrder(Integer id) {
        return adminOrderMapper.sOrder(id);
    }
}
