package com.condominio.exception.authentication.notFound;

import com.condominio.constant.ErrorCode;

public class AuthenticationNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -2226994065380175735L;

	public AuthenticationNotFoundException() {
		super(ErrorCode.AUTHENTICATION_NOT_FOUND.getMessage());
	}
}
