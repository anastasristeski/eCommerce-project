package com.example.eCommerceBackend.Records;

import java.util.List;

public record ProductListDto(Long genId, String image, String name, String price, String currency, List<AttributeDto> attributesDtoList,String category,boolean inStock) {
}
