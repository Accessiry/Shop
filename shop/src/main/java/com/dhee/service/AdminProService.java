package com.dhee.service;

import com.dhee.entity.Category;
import com.dhee.entity.Product;
import java.util.List;

public interface AdminProService {
    public List<Product> searchPro();

    public List<Product> sPro(String name);

    public List<Product> insertPro(Product product);
}
