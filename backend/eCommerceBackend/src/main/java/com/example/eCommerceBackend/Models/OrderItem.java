package com.example.eCommerceBackend.Models;

import jakarta.persistence.*;

import java.util.Map;

@Entity
@Table(name="order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    private Integer quantity;

    @ElementCollection
    @CollectionTable(name="order_item_values", joinColumns = @JoinColumn(name="order_item_id"))
    @Column(name="attribute_value")
    private Map<String,String> values;

    public OrderItem(){}

    public OrderItem( String name, Double price, Integer quantity, Map<String, String> values) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.values = values;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public void setValues(Map<String, String> values) {
        this.values = values;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Map<String, String> getValues() {
        return values;
    }
}
