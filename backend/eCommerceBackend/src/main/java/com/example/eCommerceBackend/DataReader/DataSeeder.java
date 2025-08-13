package com.example.eCommerceBackend.DataReader;

import com.example.eCommerceBackend.Models.Attributes;
import com.example.eCommerceBackend.Models.PriceItem;
import com.example.eCommerceBackend.Models.Product.Clothes;
import com.example.eCommerceBackend.Models.Product.Product;
import com.example.eCommerceBackend.Repositories.ProductRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {
    private final ProductRepository productRepository;
    private final ObjectMapper objectMapper;

    public DataSeeder(ProductRepository productRepository, ObjectMapper objectMapper) {
        this.productRepository = productRepository;
        this.objectMapper = objectMapper;
    }
    @Override
    public void run(String ...args) throws IOException {
        if(productRepository.count()==0){
            InputStream inputStream = getClass().getResourceAsStream("/static/data.json");
            JsonNode rootNode = objectMapper.readTree(inputStream);
            JsonNode productsNode = rootNode.path("data").path("products");
            List<Product> products = new ArrayList<>();
            for(JsonNode productNode: productsNode){
                String category = productNode.path("category").asText();
                Product product;
                if(category.equalsIgnoreCase("clothes")){
                    product = objectMapper.treeToValue(productNode, Clothes.class);
                    product.setAttributes(mapAttributes(productNode,product));
                    product.setPriceItems(mapPrices(productNode, product));
                    products.add(product);
                }
            }
            productRepository.saveAll(products);
        }
    }
    private List<Attributes> mapAttributes(JsonNode productNode, Product product){
        List<Attributes> attributesList = new ArrayList<>();
        return attributesList;
    }
    private List<PriceItem> mapPrices(JsonNode productNode, Product product) {
        List<PriceItem> priceItems = new ArrayList<>();
        // Logic to map JSON to PriceItem and Currency entities
        // ...
        return priceItems;
    }
}

