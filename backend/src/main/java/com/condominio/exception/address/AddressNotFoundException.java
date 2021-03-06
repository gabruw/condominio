package com.condominio.exception.address;

import com.condominio.constant.ErrorCode;

public class AddressNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 2934849111136763918L;

	public AddressNotFoundException() {
		super(ErrorCode.ADDRESS_NOT_FOUND.getMessage());
	}

}
