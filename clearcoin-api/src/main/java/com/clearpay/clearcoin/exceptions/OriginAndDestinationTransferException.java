package com.clearpay.clearcoin.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNPROCESSABLE_ENTITY, reason = "the origin and destination wallet are the same one")
public class OriginAndDestinationTransferException extends RuntimeException {
}