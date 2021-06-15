package com.clearpay.clearcoin.controllers;

import com.clearpay.clearcoin.exceptions.UserNotFoundException;
import com.clearpay.clearcoin.model.User;
import com.clearpay.clearcoin.model.Wallet;
import com.clearpay.clearcoin.services.MemoryData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@CrossOrigin(originPatterns = "*")
@RestController()
@RequestMapping("/api/user")
public class UserController {
    private MemoryData data;

    @Autowired
    public UserController(MemoryData data) {
        this.data = data;
    }

    @GetMapping()
    public List<User> getAllUsers() {
        return data.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable(value="id") int id) {
        User customer = data.getUserById(id);

        if (customer == null) {
            log.error("User ID ({}) not found", id);
            throw new UserNotFoundException();
        }

        return customer;
    }

    @GetMapping("/{id}/wallet")
    public List<Wallet> getUserWalletsById(@PathVariable(value="id") int id) {
        User customer = data.getUserById(id);

        if (customer == null) {
            log.error("User ID ({}) not found", id);
            throw new UserNotFoundException();
        }

        return data.getAllUserWalletsById(id);
    }
}
