package com.example.eCommerceBackend.Models;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("tech")
public class TechProduct extends Product{
    public TechProduct(){
        super();
    }
    @Override
    public String getCategory() {
        return "tech";
    }

}
