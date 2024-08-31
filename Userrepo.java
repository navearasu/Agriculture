package com.example.agrimang.repo;

import com.example.agrimang.entity.Userentity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Userrepo extends JpaRepository<Userentity, Long> {
    Userentity findByEmail(String email);
}
