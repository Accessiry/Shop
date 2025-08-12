package com.dhee.mapper;

import com.dhee.entity.Category;
import com.dhee.entity.Member;
import com.dhee.entity.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminCateMapper {
    public List<Category> searchCate();

    public List<Category> sCate(String name);
}
