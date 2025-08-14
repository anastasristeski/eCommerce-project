package com.example.eCommerceBackend.Records;

import com.example.eCommerceBackend.Models.Item;

import java.util.List;

public record ProductDetailsDto(String name, String price, String currency, List<String> gallery,List<AttributeDto>attributeDtoList,String description) {
}
