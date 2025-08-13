package com.example.eCommerceBackend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Attributes {
    @Id
    @GeneratedValue
    private Long genId;
    @OneToMany
    List<Attribute> attributes;
    public Attributes(){}
    public Attributes(Long genId, List<Attribute> attributes) {
        this.genId = genId;
        this.attributes = attributes;
    }
}
