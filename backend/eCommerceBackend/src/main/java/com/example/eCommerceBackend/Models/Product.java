package com.example.eCommerceBackend.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Primary;

import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type", discriminatorType = DiscriminatorType.STRING)
@AllArgsConstructor
public abstract class Product {
    @Id
    @GeneratedValue
    private Long genId;
    private String id;
    private String name;
    private boolean inStock;
    @ElementCollection
    private List<String> gallery;
    @Column(length = 5000)
    private String description;
    private String brand;
    public Product(){}
    public abstract String getCategory();

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setInStock(boolean inStock) {
        this.inStock = inStock;
    }

    public void setGallery(List<String> gallery) {
        this.gallery = gallery;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isInStock() {
        return inStock;
    }

    public List<String> getGallery() {
        return gallery;
    }

    public String getDescription() {
        return description;
    }

    public String getBrand() {
        return brand;
    }
}