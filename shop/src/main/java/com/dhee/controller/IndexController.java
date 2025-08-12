package com.dhee.controller;

import com.dhee.entity.Category;
import com.dhee.service.CategoryService;
import com.dhee.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Repository
@RequestMapping("/index")
public class IndexController {
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ProductService productService;
    //全部分类
    @ResponseBody
    @RequestMapping(value = "selALLCategory.do", produces = "application/json;charset=utf-8")
    public List<Category> selALLCategory(){
        return categoryService.selALLCategory();
    }

    @ResponseBody
    @RequestMapping(value = "indexProduct.do", produces = "application/json;charset=utf-8")
    public Map<String,Object> indexProduct(){
        return productService.selIndexDigital();
    }


}
