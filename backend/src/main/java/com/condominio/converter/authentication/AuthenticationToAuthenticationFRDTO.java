package com.condominio.converter.authentication;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

import com.condominio.dto.authentication.AuthenticationFRDTO;
import com.condominio.dto.user.UserHRDTO;
import com.condominio.entity.Authentication;

public class AuthenticationToAuthenticationFRDTO implements Converter<Authentication, AuthenticationFRDTO> {

	@Override
	public AuthenticationFRDTO convert(MappingContext<Authentication, AuthenticationFRDTO> context) {
		Authentication source = context.getSource();

		UserHRDTO user = UserHRDTO.builder().name(source.getUser().getName()).cell(source.getUser().getCell())
				.cpf(source.getUser().getCpf()).gender(source.getUser().getGender()).build();

		return AuthenticationFRDTO.builder().id(source.getId()).email(source.getEmail()).password(source.getPassword())
				.isLocked(source.getIsLocked()).role(source.getRole()).user(user).build();
	}
}
