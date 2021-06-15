package com.clearpay.clearcoin.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "wallet not found")
public class WalletNotFoundException extends RuntimeException {
}