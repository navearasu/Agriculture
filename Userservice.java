package com.example.agrimang.service;

import com.example.agrimang.entity.Userentity;
import com.example.agrimang.repo.Userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Userservice {

    @Autowired
    private Userrepo userRepository;

    public Userentity registerUser(Userentity user) {
        return userRepository.save(user);
    }

    public Userentity findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Userentity findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public Userentity loginUser(String email, String password) {
        Userentity user = userRepository.findByEmail(email);
        if (user != null && user.matchesPassword(password)) {
            return user;
        }
        return null;
    }
}
