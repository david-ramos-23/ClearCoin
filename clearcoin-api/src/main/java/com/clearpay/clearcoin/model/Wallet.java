package com.clearpay.clearcoin.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Wallet {
    private String id;
    private Double amount;
    private int userId;
}
