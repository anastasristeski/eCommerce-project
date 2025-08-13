package com.example.eCommerceBackend.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Attribute {

    @Id
    @GeneratedValue
    private Long genId;

    private String id;
    @OneToMany(mappedBy = "attribute")
    private List<Item> items;
    private String name;
    private String type;
    @ManyToOne
    private Attributes attributes;


    public void setGenId(Long genId) {
        this.genId = genId;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setAttributes(Attributes attributes) {
        this.attributes = attributes;
    }

    public Long getGenId() {
        return genId;
    }

    public String getId() {
        return id;
    }

    public List<Item> getItems() {
        return items;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public Attributes getAttributes() {
        return attributes;
    }
}
