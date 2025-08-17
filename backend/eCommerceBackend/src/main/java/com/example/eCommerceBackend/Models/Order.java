package com.example.eCommerceBackend.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double totalPrice;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="order_id")
    private List<OrderItem> items;
    public Order(){}

    public Order(Double totalPrice, List<OrderItem> items) {
        this.totalPrice = totalPrice;
        this.items = items;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public List<OrderItem> getItems() {
        return items;
    }
}
