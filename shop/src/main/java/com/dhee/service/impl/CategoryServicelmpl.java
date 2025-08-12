package com.dhee.service.impl;

import com.dhee.entity.Category;
import com.dhee.mapper.CategoryMapper;
import com.dhee.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryServicelmpl implements CategoryService {
    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public List<Category> selALLCategory() {
        return categoryMapper.selALLCategory();
    }
}
