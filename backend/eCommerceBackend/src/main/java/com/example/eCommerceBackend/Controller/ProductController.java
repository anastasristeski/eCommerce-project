package com.example.eCommerceBackend.Controller;

import com.example.eCommerceBackend.Models.Product.Product;
import com.example.eCommerceBackend.Records.ProductDetailsDto;
import com.example.eCommerceBackend.Records.ProductListDto;
import com.example.eCommerceBackend.Repositories.ProductRepository;
import com.example.eCommerceBackend.Service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;
    private final ProductRepository productRepository;

    public ProductController(ProductService productService, ProductRepository productRepository) {
        this.productService = productService;
        this.productRepository = productRepository;
    }
    @GetMapping()
    public List<ProductListDto> getAllProducts(@RequestParam(required = false) String category){
        if(category == null || category.isEmpty())
            return productService.getAllProducts();

        return productService.getByCategory(category);
    }
    @GetMapping("/{name}")
    public ResponseEntity<ProductDetailsDto> getProductDetails(@PathVariable String name){
        Optional<ProductDetailsDto> productDetailsDto = productService.getProductDetailsByName(name);
        return productDetailsDto.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

}
