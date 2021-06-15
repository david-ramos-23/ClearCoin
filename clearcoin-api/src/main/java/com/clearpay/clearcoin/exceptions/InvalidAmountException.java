package com.clearpay.clearcoin.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNPROCESSABLE_ENTITY, reason = "the amount is invalid")
public class InvalidAmountException extends RuntimeException {
}