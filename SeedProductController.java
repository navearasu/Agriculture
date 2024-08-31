package com.example.agrimang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.agrimang.entity.SeedProduct;
import com.example.agrimang.service.SeedProductService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/seed-products")
public class SeedProductController {

    @Autowired
    private SeedProductService seedProductService;

    @PostMapping("/create")
    public ResponseEntity<SeedProduct> createSeedProduct(
            @RequestParam("name") String name,
            @RequestParam("price") Double price,
            @RequestParam("image") MultipartFile image) {

        try {
            SeedProduct createdProduct = seedProductService.saveSeedProduct(name, price, image);
            return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<SeedProduct>> getAllSeedProducts() {
        List<SeedProduct> products = seedProductService.getAllSeedProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SeedProduct> getSeedProductById(@PathVariable Long id) {
        SeedProduct product = seedProductService.getSeedProductById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
