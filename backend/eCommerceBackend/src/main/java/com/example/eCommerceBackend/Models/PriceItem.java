package com.example.eCommerceBackend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class PriceItem {
    @Id
    @GeneratedValue
    private Long id;

    private String amount;
    @OneToMany
    private List<Currency> currencies;
}
