package com.condominio.converter.authentication;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

import com.condominio.dto.authentication.AuthenticationRPDTO;
import com.condominio.dto.user.UserRDTO;
import com.condominio.entity.Authentication;

public class AuthenticationToUserRDTO implements Converter<Authentication, UserRDTO> {

	@Override
	public UserRDTO convert(MappingContext<Authentication, UserRDTO> context) {
		Authentication source = context.getSource();

		AuthenticationRPDTO authentication = AuthenticationRPDTO.builder().email(source.getEmail())
				.password(source.getPassword()).build();

		return UserRDTO.builder().name(source.getUser().getName()).cell(source.getUser().getCell())
				.cpf(source.getUser().getCpf()).gender(source.getUser().getGender()).unity(source.getUser().getUnity())
				.authentication(authentication).build();
	}
}
