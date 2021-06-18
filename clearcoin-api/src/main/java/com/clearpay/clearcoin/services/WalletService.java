package com.clearpay.clearcoin.services;

import com.clearpay.clearcoin.exceptions.InvalidAmountException;
import com.clearpay.clearcoin.exceptions.OriginAndDestinationTransferException;
import com.clearpay.clearcoin.exceptions.WalletNotFoundException;
import com.clearpay.clearcoin.model.Transfer;
import com.clearpay.clearcoin.model.Wallet;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class WalletService {
    private final MemoryData db;

    @Autowired
    public WalletService(MemoryData db) {
        this.db = db;
    }

    public void transfer(Transfer transfer) {
        Wallet originWallet = db.getWalletById(transfer.getOriginWalletId());
        Wallet destinationWallet = db.getWalletById(transfer.getDestinationWalletId());

        if (originWallet == null || destinationWallet == null) {
            log.error("Origin wallet ({}) or destination wallet ({}) not found",
                    originWallet, destinationWallet);
            throw new WalletNotFoundException();
        }

        if (originWallet.getId().equals(destinationWallet.getId())) {
            log.error("Origin wallet ({}) and destination wallet ({}) must not be equal",
                    originWallet, destinationWallet);
            throw new OriginAndDestinationTransferException();
        }

        if (transfer.getAmount() <= 0) {
            log.error("The transferOrder amount is equal or smaller than 0: {}", transfer.getAmount());
            throw new InvalidAmountException();
        }

        if (originWallet.getAmount() < transfer.getAmount()) {
            log.error("The transferOrder amount is higher than originWallet amount : {}", transfer.getAmount());
            throw new InvalidAmountException();
        }

        updateWalletBalance(originWallet, destinationWallet, transfer.getAmount());
    }

    private void updateWalletBalance(Wallet originWallet, Wallet destinationWallet, Double amount) {
        originWallet.setAmount(originWallet.getAmount() - amount);
        destinationWallet.setAmount(destinationWallet.getAmount() + amount);
    }
}
