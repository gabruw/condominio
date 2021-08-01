package com.condominio.exception.authentication.alreadyExists;

import com.condominio.constant.ErrorCode;

public class AuthenticationAlreadyExistsException extends RuntimeException {

    private static final long serialVersionUID = -1789831594062558569L;

    public AuthenticationAlreadyExistsException() {
		super(ErrorCode.AUTHENTICATION_ALREADY_EXISTS.getMessage());
	}
}
