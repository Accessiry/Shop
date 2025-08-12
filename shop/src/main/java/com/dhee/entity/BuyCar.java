package com.dhee.entity;

public class BuyCar {
    private Integer id;
    private Integer pid;
    private Integer num;
    private Integer mid;

    private Product product;

    public BuyCar(){

    }

    public BuyCar(Integer id, Integer pid, Integer num, Integer mid) {
        this.id = id;
        this.pid = pid;
        this.num = num;
        this.mid = mid;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Integer getMid() {
        return mid;
    }

    public void setMid(Integer mid) {
        this.mid = mid;
    }

    @Override
    public String toString() {
        return "BuyCar{" +
                "id=" + id +
                ", pid=" + pid +
                ", num=" + num +
                ", mid=" + mid +
                '}';
    }
}
