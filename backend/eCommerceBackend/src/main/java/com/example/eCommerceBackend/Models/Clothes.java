package com.example.eCommerceBackend.Models;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("clothes")
public class Clothes extends Product{
    public Clothes(){
        super();
    }
    @Override
    public String getCategory() {
        return "clothes";
    }
}
