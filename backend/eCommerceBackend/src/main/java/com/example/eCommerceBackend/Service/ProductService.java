package com.example.eCommerceBackend.Service;

import com.example.eCommerceBackend.Models.Attribute;
import com.example.eCommerceBackend.Models.Item;
import com.example.eCommerceBackend.Models.Product.Product;
import com.example.eCommerceBackend.Records.AttributeDto;
import com.example.eCommerceBackend.Records.ItemDto;
import com.example.eCommerceBackend.Records.ProductDetailsDto;
import com.example.eCommerceBackend.Records.ProductListDto;
import com.example.eCommerceBackend.Repositories.ProductRepository;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;


    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    public List<ProductListDto> getAllProducts(){
        return productRepository.findAll().stream()
                .map(product -> new ProductListDto(
                        product.getGenId(),
                        product.getGallery().get(0),product.getName(),
                        product.getPriceItems().get(0).getAmount(),
                        product.getPriceItems().get(0).getCurrencies().get(0).getSymbol(),
                        product.getAttributes().stream().map(this::mapAttributeToDto).toList(),
                        product.getCategory(),
                        product.isInStock()
                ))
                .toList();
    }
    public List<ProductListDto> getByCategory(String category){

        return getAllProducts().stream().filter(x->x.category().equalsIgnoreCase(category)).toList();
    }
    public Optional<ProductDetailsDto> getProductDetailsByName(String name){
        return Optional.ofNullable(productRepository.findByName(name)).map(this::mapProductToDetailsDto);
    }
    public ProductDetailsDto mapProductToDetailsDto(Product product){
        String price = product.getPriceItems().get(0).getAmount();
        String currency = product.getPriceItems().get(0).getCurrencies().get(0).getSymbol();

        List<AttributeDto> attributeDtos = product.getAttributes().stream()
                .map(this::mapAttributeToDto)
                .toList();
        return new ProductDetailsDto(
                product.getName(),
                price,
                currency,
                product.getGallery(),
                attributeDtos,
                product.getDescription(),
                product.getCategory(),
                product.isInStock()
        );

    }
    private AttributeDto mapAttributeToDto(Attribute attribute){
        List<ItemDto> itemDtos = attribute.getItems().stream()
                .map(this::mapItemToDto)
                .toList();
        return new AttributeDto(attribute.getName().toUpperCase(),itemDtos);
    }
    private ItemDto mapItemToDto(Item item){
        return new ItemDto(item.getDisplayValue(), item.getValue());
    }


}