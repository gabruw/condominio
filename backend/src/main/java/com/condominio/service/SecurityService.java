package com.condominio.service;

import com.condominio.dto.LoginDTO;
import com.condominio.dto.token.TokenFRDTO;
import com.condominio.dto.token.TokenRDTO;

public interface SecurityService {

	void lock(Long id);

	void unlock(Long id);

	TokenFRDTO login(LoginDTO loginDTO);

	TokenRDTO refresh(String token);
}
