package com.clearpay.clearcoin.services;

import com.clearpay.clearcoin.model.User;
import com.clearpay.clearcoin.model.Wallet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.Arrays.asList;

@Service
public class MemoryData {
    private List<User> users;
    private List<Wallet> wallets;

    @Autowired
    public MemoryData() {}

    public void initializeData() {
        User user1 = new User(1, "David", "Ramos", "andara14@gmail.com");
        User user2 = new User(2, "Angel", "Ruiz", "angel.ruiz@gmail.com");
        User user3 = new User(3, "Virginia", "Alcaide", "virginia.alcaide@gmail.com");

        Wallet wallet1 = new Wallet("ad55e955-1dde-40b1-a308-a6ed40cd13f0", 2303.94, 1);
        Wallet wallet2 = new Wallet("1161faf0-4e4f-41a9-aeef-6446918fdcb6", 23.0, 1);
        Wallet wallet3 = new Wallet("645556eb-da36-4029-9f89-45ca2e0a9409", 1812.91, 2);
        Wallet wallet4 = new Wallet("f59aae24-f5e0-481e-a96e-3c1512f61f30", 14.0, 2);
        Wallet wallet5 = new Wallet("770d5878-224c-4a64-a1b0-3d0c5bbe83f2", 69.0, 3);

        setUsers(asList(user1, user2, user3));
        setWallets(asList(wallet1, wallet2, wallet3, wallet4, wallet5));
    }

    public List<User> getAllUsers() {
        return users;
    }

    public User getUserById(int id) {
        return users.stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Wallet> getAllWallets() {
        return wallets;
    }

    public void setWallets(List<Wallet> wallets) {
        this.wallets = wallets;
    }

    public Wallet getWalletById(String id) {
        return wallets.stream()
                .filter(wallet -> wallet.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public List<Wallet> getAllUserWalletsById(int id) {
        return wallets.stream()
                .filter(wallet -> wallet.getUserId() == id)
                .collect(Collectors.toList());
    }
}
