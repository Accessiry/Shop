package com.dhee.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class MyOrder {
    private Integer id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date time;
    private Integer state;//1：已付款，2：已发货，3：已收货
    private Integer mid;
    private String address;

    public MyOrder() {
    }

    public MyOrder(Integer id, Date time, Integer state, Integer mid, String address) {
        this.id = id;
        this.time = time;
        this.state = state;
        this.mid = mid;
        this.address = address;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Integer getMid() {
        return mid;
    }

    public void setMid(Integer mid) {
        this.mid = mid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "MyOrder{" +
                "id=" + id +
                ", time=" + time +
                ", state=" + state +
                ", mid=" + mid +
                ", address='" + address + '\'' +
                '}';
    }
}
