package com.example.eCommerceBackend.Models;

import com.example.eCommerceBackend.Models.Product.Product;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Attributes {
    @Id
    @GeneratedValue
    private Long genId;
    @OneToMany(mappedBy = "attributes", cascade = CascadeType.ALL)
    List<Attribute> attributes;
    @ManyToOne
    private Product product;
    public Attributes(){}
    public Attributes(Long genId, List<Attribute> attributes) {
        this.genId = genId;
        this.attributes = attributes;
    }

    public Long getGenId() {
        return genId;
    }

    public List<Attribute> getAttributes() {
        return attributes;
    }

    public Product getProduct() {
        return product;
    }

    public void setGenId(Long genId) {
        this.genId = genId;
    }

    public void setAttributes(List<Attribute> attributes) {
        this.attributes = attributes;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
