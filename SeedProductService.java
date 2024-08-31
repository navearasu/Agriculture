package com.example.agrimang.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.agrimang.entity.SeedProduct;
import com.example.agrimang.repo.SeedProductRepository;

import java.io.IOException;
import java.util.List;

@Service
public class SeedProductService {

    @Autowired
    private SeedProductRepository seedProductRepository;

    public SeedProduct saveSeedProduct(String name, Double price, MultipartFile imageFile) throws IOException {
        SeedProduct product = new SeedProduct();
        product.setName(name);
        product.setPrice(price);
        product.setImage(imageFile.getBytes());

        return seedProductRepository.save(product);
    }

    public List<SeedProduct> getAllSeedProducts() {
        return seedProductRepository.findAll();
    }

    public SeedProduct getSeedProductById(Long id) {
        return seedProductRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }
}
