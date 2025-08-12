package com.dhee.service.impl;

import com.dhee.entity.Category;
import com.dhee.entity.Member;
import com.dhee.entity.Product;
import com.dhee.mapper.AdminCateMapper;
import com.dhee.mapper.AdminMapper;
import com.dhee.service.AdminCateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminCatelmpl implements AdminCateService {
    @Autowired
    private AdminCateMapper adminCateMapper;
    @Override
    public List<Category> searchCate() {
        return adminCateMapper.searchCate();
    }

    @Override
    public List<Category> sCate(String name) {
        return adminCateMapper.sCate(name);
    }
}
