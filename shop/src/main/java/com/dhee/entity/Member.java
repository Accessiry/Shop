package com.dhee.entity;

public class Member {

    private Integer id;

    private String username;

    private String password;

    private String name;

    private String identify;

    private String tel;

    private String email;

    private Integer balance;

    private Integer state;

    public Member(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public Member(Integer id, String username, String password, String name, String identify, String tel, String email, Integer balance, Integer state) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.identify = identify;
        this.tel = tel;
        this.email = email;
        this.balance = balance;
        this.state = state;
    }

    public Member() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdentify() {
        return identify;
    }

    public void setIdentify(String identify) {
        this.identify = identify;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getBalance() {
        return balance;
    }

    public void setBalance(Integer balance) {
        this.balance = balance;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "Member{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", identify='" + identify + '\'' +
                ", tel='" + tel + '\'' +
                ", email='" + email + '\'' +
                ", balance=" + balance +
                ", state=" + state +
                '}';
    }
}
