package com.example.eCommerceBackend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Currency {
    @Id
    @GeneratedValue
    private Long id;
    private String label;
    private String symbol;
    @ManyToOne
    private PriceItem priceItem;
    public Currency(){}
    public Currency(Long id, String label, String symbol, PriceItem priceItem) {
        this.id = id;
        this.label = label;
        this.symbol = symbol;
        this.priceItem = priceItem;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public void setPriceItem(PriceItem priceItem) {
        this.priceItem = priceItem;
    }

    public Long getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public String getSymbol() {
        return symbol;
    }

    public PriceItem getPriceItem() {
        return priceItem;
    }
}
