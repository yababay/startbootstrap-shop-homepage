package com.webshop.controllers;

import com.webshop.models.Product;
import com.webshop.services.ProductsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ProductsController {
    private ProductsServiceImpl service;

    @Autowired
    public ProductsController(ProductsServiceImpl service) {
        this.service = service;
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return service.getProducts();
    }

}

