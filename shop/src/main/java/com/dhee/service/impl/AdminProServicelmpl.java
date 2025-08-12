package com.dhee.service.impl;

import com.dhee.entity.Product;
import com.dhee.mapper.AdminProMapper;
import com.dhee.service.AdminProService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminProServicelmpl implements AdminProService {
    @Autowired
    private AdminProMapper adminProMapper;

    @Override
    public List<Product> searchPro() {
        return adminProMapper.searchPro();
    }

    @Override
    public List<Product> sPro(String name) {
        return adminProMapper.sPro(name);
    }

    @Override
    public List<Product> insertPro(Product product) {
        return adminProMapper.insertPro(product);
    }
}
