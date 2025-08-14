package com.example.eCommerceBackend.Service;

import com.example.eCommerceBackend.Models.Product.Product;
import com.example.eCommerceBackend.Repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;


    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
}
