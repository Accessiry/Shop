package com.dhee.service;

import com.dhee.entity.Category;
import com.dhee.entity.Member;
import com.dhee.entity.Product;

import java.util.List;

public interface AdminCateService {
    List<Category> searchCate();

    List<Category> sCate(String name);
}
