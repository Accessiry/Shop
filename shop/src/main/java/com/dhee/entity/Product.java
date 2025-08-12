package com.dhee.entity;

public class Product {
    private Integer id;//商品id
    private String name;//商品名称
    private String type;//类型
    private String color;//颜色
    private Double price;//价格
    private Integer state;//状态
    private Integer number;
    private String img;//图片
    private String imgPath;
    private Integer cid;

    private Category category;

    public  Product(){

    }

    public Product(Integer id, String name, String type, String color, Double price, Integer state, Integer number, String img, String imgPath, Integer cid) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.color = color;
        this.price = price;
        this.state = state;
        this.number = number;
        this.img = img;
        this.imgPath = imgPath;
        this.cid = cid;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", color='" + color + '\'' +
                ", price=" + price +
                ", state=" + state +
                ", number=" + number +
                ", img='" + img + '\'' +
                ", imgPath='" + imgPath + '\'' +
                ", cid=" + cid +
                '}';
    }
}