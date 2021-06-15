package com.clearpay.clearcoin.model;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Data
@RequiredArgsConstructor
public class User {

    @NonNull
    private int id;
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
    @NonNull
    private String email;
    private List<Wallet> wallets;
}
