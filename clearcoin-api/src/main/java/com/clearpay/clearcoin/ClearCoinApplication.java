package com.clearpay.clearcoin;

import com.clearpay.clearcoin.services.MemoryData;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ClearCoinApplication {
    private MemoryData data;

    public static void main(String[] args) {
        SpringApplication.run(ClearCoinApplication.class, args);
    }

    public ClearCoinApplication(MemoryData data) {
        this.data = data;
        this.data.initializeData();
    }
}
