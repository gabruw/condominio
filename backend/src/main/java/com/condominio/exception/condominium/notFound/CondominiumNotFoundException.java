package com.condominio.exception.condominium.notFound;

import com.condominio.constant.ErrorCode;

public class CondominiumNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -4166660435728299285L;

	public CondominiumNotFoundException() {
		super(ErrorCode.CONDOMINIUM_NOT_FOUND.getMessage());
	}
}
