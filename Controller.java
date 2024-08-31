package com.example.agrimang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.agrimang.entity.Userentity;
import com.example.agrimang.service.Userservice;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class Controller {

    @Autowired
    private Userservice userService;

    @PostMapping("/register")
    public Userentity registerUser(@RequestBody Userentity user) {
        return userService.registerUser(user);
    }

    @GetMapping("/user/email/{email}")
    public Userentity getUserByEmail(@PathVariable String email) {
        return userService.findUserByEmail(email);
    }

    @GetMapping("/user/id/{id}")
    public Userentity getUserById(@PathVariable Long id) {
        return userService.findUserById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Userentity user) {
        Userentity authenticatedUser = userService.loginUser(user.getEmail(), user.getPassword());
        if (authenticatedUser != null) {
            return ResponseEntity.ok(authenticatedUser);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials");
    }
}
