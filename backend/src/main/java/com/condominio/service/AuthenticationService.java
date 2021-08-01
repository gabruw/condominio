package com.condominio.service;

import java.util.List;

import com.condominio.constant.AuthenticationRole;
import com.condominio.dto.authentication.AuthenticationFPDTO;
import com.condominio.dto.authentication.AuthenticationFRDTO;
import com.condominio.dto.authentication.AuthenticationRPDTO;
import com.condominio.dto.user.UserPDTO;

public interface AuthenticationService {

	AuthenticationFRDTO findById(Long id);

	AuthenticationFRDTO findByEmail(String email);

	AuthenticationRPDTO include(UserPDTO userPDTO, List<AuthenticationRole> roles);

	AuthenticationRPDTO edit(AuthenticationFPDTO authentication);
}
