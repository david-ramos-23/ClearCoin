package com.clearpay.clearcoin.model;

import lombok.Data;

import java.util.Date;

@Data
public class TransferOrder {
    private String originWalletId;
    private String destinationWalletId;
    private Double amount;
    private Date date;
}
