package com.condominio.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.condominio.converter.authentication.AuthenticationFRDTOToJwtUser;
import com.condominio.converter.authentication.AuthenticationToAuthenticationFRDTO;
import com.condominio.converter.authentication.AuthenticationToUserRDTO;
import com.condominio.converter.user.UserPDTOToAuthentication;

@Configuration
public class ModelMapperConfig {

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();

		// Authentication
		modelMapper.addConverter(new AuthenticationToUserRDTO());
		modelMapper.addConverter(new AuthenticationFRDTOToJwtUser());
		modelMapper.addConverter(new AuthenticationToAuthenticationFRDTO());

		// User
		modelMapper.addConverter(new UserPDTOToAuthentication());

		return modelMapper;
	}
}