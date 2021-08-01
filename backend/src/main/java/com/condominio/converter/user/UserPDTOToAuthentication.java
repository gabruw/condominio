package com.condominio.converter.user;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

import com.condominio.dto.user.UserPDTO;
import com.condominio.entity.Authentication;
import com.condominio.entity.User;

public class UserPDTOToAuthentication implements Converter<UserPDTO, Authentication> {

	@Override
	public Authentication convert(MappingContext<UserPDTO, Authentication> context) {
		UserPDTO source = context.getSource();

		User user = User.builder().name(source.getName()).cell(source.getCell()).cpf(source.getCpf())
				.unity(source.getUnity()).gender(source.getGender()).build();

		return Authentication.builder().email(source.getAuthentication().getEmail())
				.password(source.getAuthentication().getPassword()).user(user).build();
	}
}
