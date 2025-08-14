package com.example.eCommerceBackend.Models;

import com.example.eCommerceBackend.Models.Product.Product;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class PriceItem {
    @Id
    @GeneratedValue
    private Long id;
    private String amount;
    @OneToMany(mappedBy = "priceItem", cascade = CascadeType.ALL)
    private List<Currency> currencies;
    @ManyToOne
    private Product product;

    public PriceItem(Long id, String amount, List<Currency> currencies, Product product) {
        this.id = id;
        this.amount = amount;
        this.currencies = currencies;
        this.product = product;
    }

    public PriceItem(){}
    public void setId(Long id) {
        this.id = id;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public void setCurrencies(List<Currency> currencies) {
        this.currencies = currencies;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public String getAmount() {
        return amount;
    }

    public List<Currency> getCurrencies() {
        return currencies;
    }

    public Product getProduct() {
        return product;
    }
}
