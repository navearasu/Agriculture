package com.example.agrimang.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.agrimang.entity.SeedProduct;

public interface SeedProductRepository extends JpaRepository<SeedProduct, Long> {
}
