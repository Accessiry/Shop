package com.dhee.service;

import com.dhee.entity.Category;
import com.dhee.entity.Message;

import java.util.List;

public interface AdminMesService {
    List<Message> searchMes();

    List<Message> sMes(Integer id);
}
