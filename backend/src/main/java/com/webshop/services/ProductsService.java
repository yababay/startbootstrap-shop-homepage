package com.webshop.services;

import com.webshop.models.Product;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface ProductsService {

    List<Product> getProducts();
    Product save(Product doctor);
    void delete(Product doctor);

}
