package com.dhee.mapper;

import com.dhee.entity.Category;
import com.dhee.entity.MyOrder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminOrderMapper {
    public List<MyOrder> searchOrder();

    public List<MyOrder> sOrder(Integer id);
}
