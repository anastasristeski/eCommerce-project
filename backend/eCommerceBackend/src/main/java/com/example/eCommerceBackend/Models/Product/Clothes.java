package com.example.eCommerceBackend.Models.Product;

import com.example.eCommerceBackend.Models.Product.Product;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("clothes")
public class Clothes extends Product {
    public Clothes(){
        super();
    }
    @Override
    public String getCategory() {
        return "clothes";
    }
}
