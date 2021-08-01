package com.condominio.exception.consumption.notFound;

import com.condominio.constant.ErrorCode;

public class ConsumptionNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -5966125173757001555L;

	public ConsumptionNotFoundException() {
		super(ErrorCode.CONSUMPTION_NOT_FOUND.getMessage());
	}
}
