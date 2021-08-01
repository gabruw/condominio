package com.condominio.exception.condominium.alreadyExists;

import com.condominio.constant.ErrorCode;

public class CondominiumAlreadyExistsException extends RuntimeException {

	private static final long serialVersionUID = 6913376550454801370L;

	public CondominiumAlreadyExistsException() {
		super(ErrorCode.CONDOMINIUM_ALREADY_EXISTS.getMessage());
	}
}
