package com.clearpay.clearcoin.controllers;

import com.clearpay.clearcoin.exceptions.WalletNotFoundException;
import com.clearpay.clearcoin.model.Transfer;
import com.clearpay.clearcoin.model.Wallet;
import com.clearpay.clearcoin.services.MemoryData;
import com.clearpay.clearcoin.services.WalletService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@CrossOrigin(originPatterns = "*")
@RestController()
@RequestMapping("/api/wallet")
public class WalletController {
    private MemoryData data;
    private WalletService walletService;

    @Autowired
    public WalletController(MemoryData data, WalletService walletService) {
        this.data = data;
        this.walletService = walletService;
    }

    @GetMapping
    public List<Wallet> getAllWallets() {
        return data.getAllWallets();
    }

    @GetMapping("/{id}")
    public Wallet getWalletById(@PathVariable(value="id") String id) {
        Wallet wallet = data.getWalletById(id);

        if (wallet == null) {
            log.error("Wallet ID ({}) not found", id);
            throw new WalletNotFoundException();
        }

        return wallet;
    }

    @PostMapping(value= "/transfer", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseStatus(HttpStatus.OK)
    public void transfer(@RequestBody Transfer transfer) {
        walletService.sendMoney(transfer);
    }

}
