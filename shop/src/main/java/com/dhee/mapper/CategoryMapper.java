package com.dhee.mapper;

import com.dhee.entity.Category;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryMapper {
    //分类查询
    public List <Category> selALLCategory();
}
