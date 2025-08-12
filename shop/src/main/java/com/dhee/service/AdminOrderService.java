package com.dhee.service;

import com.dhee.entity.Category;
import com.dhee.entity.MyOrder;

import java.util.List;

public interface AdminOrderService {
    public List<MyOrder> searchOrder();

    List<MyOrder> sOrder(Integer id);
}
