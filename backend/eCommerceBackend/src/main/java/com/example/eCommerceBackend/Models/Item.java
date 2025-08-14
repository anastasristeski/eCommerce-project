package com.example.eCommerceBackend.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Item {

    private String displayValue;
    private String value;
    @Id
    @GeneratedValue
    private Long genId;
    private String id;
    @ManyToOne
    @JsonBackReference

    private Attribute attribute;

    public Item (){

    }

    public Item(String displayValue, String value, String id, Attribute attribute) {
        this.displayValue = displayValue;
        this.value = value;
        this.id = id;
        this.attribute = attribute;
    }

    public void setGenId(Long genId) {
        this.genId = genId;
    }

    public Long getGenId() {
        return genId;
    }

    public Item(String displayValue, String value, String id) {
        this.displayValue = displayValue;
        this.value = value;
        this.id = id;
    }

    public void setDisplayValue(String displayValue) {
        this.displayValue = displayValue;
    }

    public Attribute getAttribute() {
        return attribute;
    }

    public void setAttribute(Attribute attribute) {
        this.attribute = attribute;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getDisplayValue() {
        return displayValue;
    }

    public String getValue() {
        return value;
    }
}
