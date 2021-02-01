package com.webshop.services;

import com.webshop.models.Product;
import com.webshop.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.google.common.collect.Lists;


@Service
public class ProductsServiceImpl implements ProductsService{

    private ProductsRepository repository;

    @Autowired
    public ProductsServiceImpl(ProductsRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Product> getProducts() {
        return Lists.newArrayList(repository.findAll());
    }

    @Override
    public Product save(Product doctor) {
        return repository.save(doctor);
    }

    @Override
    public void delete(Product doctor) {
        repository.delete(doctor);
    }

}
