package com.condominio.service.implementation;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.condominio.constant.AuthenticationRole;
import com.condominio.dto.authentication.AuthenticationFPDTO;
import com.condominio.dto.authentication.AuthenticationFRDTO;
import com.condominio.dto.authentication.AuthenticationRPDTO;
import com.condominio.dto.user.UserPDTO;
import com.condominio.entity.Authentication;
import com.condominio.entity.Condominium;
import com.condominio.repository.AuthenticationRepository;
import com.condominio.security.entity.JwtUser;
import com.condominio.service.AuthenticationService;
import com.condominio.service.processor.AuthenticationProcessor;
import com.condominio.service.processor.CondominiumProcessor;
import com.condominio.util.Encryptor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class AuthenticationServiceImplementation implements AuthenticationService, UserDetailsService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private CondominiumProcessor condominiumProcessor;

	@Autowired
	private AuthenticationProcessor authenticationProcessor;

	@Autowired
	private AuthenticationRepository authenticationRepository;

	@Override
	public AuthenticationFRDTO findById(Long id) {
		log.info("Start - AuthenticationServiceImplementation.findById - Id: {}", id);

		Authentication authentication = this.authenticationProcessor.exists(id);
		AuthenticationFRDTO authenticationFRDTO = this.mapper.map(authentication, AuthenticationFRDTO.class);

		log.info("End - AuthenticationServiceImplementation.findById - AuthenticationFRDTO: {}", authenticationFRDTO);
		return authenticationFRDTO;
	}

	@Override
	public AuthenticationFRDTO findByEmail(String email) {
		log.info("Start - AuthenticationServiceImplementation.findByEmail - Email: {}", email);

		Authentication authentication = this.authenticationProcessor.exists(email);
		AuthenticationFRDTO authenticationFRDTO = this.mapper.map(authentication, AuthenticationFRDTO.class);

		log.info("End - AuthenticationServiceImplementation.findByEmail - AuthenticationFRDTO: {}",
				authenticationFRDTO);
		return authenticationFRDTO;
	}

	@Override
	public AuthenticationRPDTO include(UserPDTO userPDTO, List<AuthenticationRole> roles) {
		log.info("Start - AuthenticationServiceImplementation.include - UserPDTO: {} - List<AuthenticationRole>: {}",
				userPDTO, roles);

		Condominium condominium = this.condominiumProcessor.exists(userPDTO.getCondominium().getId());

		Authentication authentication = this.mapper.map(userPDTO, Authentication.class);
		authentication.setRole(roles);
		authentication.setIsLocked(false);
		authentication.getUser().setCondominium(condominium);

		String encodedPassword = Encryptor.encode(authentication.getPassword());
		authentication.setPassword(encodedPassword);

		authentication = this.authenticationRepository.save(authentication);

		AuthenticationRPDTO authenticationRDTO = this.mapper.map(authentication, AuthenticationRPDTO.class);
		authenticationRDTO.setPassword(userPDTO.getAuthentication().getPassword());

		log.info("End - AuthenticationServiceImplementation.include - AuthenticationRDTO: {}", authenticationRDTO);
		return authenticationRDTO;
	}

	@Override
	public AuthenticationRPDTO edit(AuthenticationFPDTO authenticationFPDTO) {
		log.info("Start - AuthenticationServiceImplementation.edit - AuthenticationFPDTO: {}", authenticationFPDTO);

		Authentication authentication = this.mapper.map(authenticationFPDTO, Authentication.class);
		authentication = this.authenticationProcessor.merge(authentication);

		String encodedPassword = Encryptor.encode(authentication.getPassword());
		authentication.setPassword(encodedPassword);

		authentication = this.authenticationRepository.save(authentication);
		AuthenticationRPDTO authenticationRDTO = this.mapper.map(authentication, AuthenticationRPDTO.class);

		log.info("End - AuthenticationServiceImplementation.edit - AuthenticationFRPDTO: {}", authenticationRDTO);
		return authenticationRDTO;
	}

	@Override
	public UserDetails loadUserByUsername(String email) {
		log.info("Start - AuthenticationServiceImplementation.loadUserByUsername - Email: {}", email);

		AuthenticationFRDTO authentication = this.findByEmail(email);
		JwtUser jwtUser = this.mapper.map(authentication, JwtUser.class);

		log.info("End - AuthenticationServiceImplementation.loadUserByUsername - JwtUser: {}", jwtUser);
		return jwtUser;
	}
}
