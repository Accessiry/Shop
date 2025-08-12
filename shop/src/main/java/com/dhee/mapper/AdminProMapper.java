package com.dhee.mapper;


import com.dhee.entity.Member;
import com.dhee.entity.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminProMapper {
    public List<Product> searchPro();

    public List<Product> sPro(String name);

    public List<Product> insertPro(Product product);
}
