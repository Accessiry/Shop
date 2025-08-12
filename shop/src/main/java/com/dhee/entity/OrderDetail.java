package com.dhee.entity;

public class OrderDetail {
    private Integer id;
    private Integer pid;
    private Integer oid;
    private Integer num;
    private Product product;

    public OrderDetail() {
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public OrderDetail(Integer id, Integer pid, Integer oid, Integer num) {
        this.id = id;
        this.pid = pid;
        this.oid = oid;
        this.num = num;
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

    public Integer getOid() {
        return oid;
    }

    public void setOid(Integer oid) {
        this.oid = oid;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "id=" + id +
                ", pid=" + pid +
                ", oid=" + oid +
                ", num=" + num +
                '}';
    }
}
