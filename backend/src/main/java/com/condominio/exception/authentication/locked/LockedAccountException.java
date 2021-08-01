package com.condominio.exception.authentication.locked;

import com.condominio.constant.ErrorCode;

public class LockedAccountException extends RuntimeException {

	private static final long serialVersionUID = 7976777825709332795L;

	public LockedAccountException() {
		super(ErrorCode.LOCKED_ACCOUNT.getMessage());
	}
}
