package com.condominio.exception.user.notFound;

import com.condominio.constant.ErrorCode;

public class UserNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -613537128688717308L;

	public UserNotFoundException() {
		super(ErrorCode.USER_NOT_FOUND.getMessage());
	}
}
