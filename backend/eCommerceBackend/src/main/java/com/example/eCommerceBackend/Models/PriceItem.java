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
}
