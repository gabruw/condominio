package com.condominio.service.implementation;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condominio.constant.AuthenticationRole;
import com.condominio.dto.LoginDTO;
import com.condominio.dto.authentication.AuthenticationRPDTO;
import com.condominio.dto.user.UserPDTO;
import com.condominio.service.AuthenticationService;
import com.condominio.service.UserService;
import com.condominio.service.processor.UserProcessor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserServiceImplementation implements UserService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private UserProcessor userProcessor;

	@Autowired
	private AuthenticationService authenticationService;

	@Override
	public LoginDTO includeResident(UserPDTO userPDTO) {
		log.info("Start - UserServiceImplementation.includeVoluntary - UserPDTO: {}", userPDTO);

		this.userProcessor.alreadyExists(userPDTO.getCpf());

		List<AuthenticationRole> roles = Arrays.asList(AuthenticationRole.RESIDENT);

		AuthenticationRPDTO authenticationRDTO = this.authenticationService.include(userPDTO, roles);
		LoginDTO loginDTO = this.mapper.map(authenticationRDTO, LoginDTO.class);

		log.info("End - UserServiceImplementation.includeVoluntary - LoginDTO: {}", loginDTO);
		return loginDTO;
	}

	@Override
	public LoginDTO includeAdministrator(UserPDTO userPDTO) {
		log.info("Start - UserServiceImplementation.includeAdministrator - UserPDTO: {}", userPDTO);

		this.userProcessor.alreadyExists(userPDTO.getCpf());

		List<AuthenticationRole> roles = Arrays.asList(AuthenticationRole.ADMINISTRATOR);

		AuthenticationRPDTO authenticationRDTO = this.authenticationService.include(userPDTO, roles);
		LoginDTO loginDTO = this.mapper.map(authenticationRDTO, LoginDTO.class);

		log.info("End - UserServiceImplementation.includeAdministrator - LoginDTO: {}", loginDTO);
		return loginDTO;
	}
}
