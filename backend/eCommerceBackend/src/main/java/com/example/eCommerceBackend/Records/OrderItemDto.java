package com.example.eCommerceBackend.Records;

import java.util.Map;

public class OrderItemDto {
    private String name;
    private double price;
    private int quantity;
    private Map<String, String> values;

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setValues(Map<String, String> values) {
        this.values = values;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public Map<String, String> getValues() {
        return values;
    }
}
