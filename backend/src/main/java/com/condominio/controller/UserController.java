package com.condominio.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.condominio.dto.LoginDTO;
import com.condominio.dto.token.TokenFRDTO;
import com.condominio.dto.user.UserPDTO;
import com.condominio.service.SecurityService;
import com.condominio.service.UserService;
import com.condominio.util.Response;

import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@NoArgsConstructor
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private SecurityService securityService;

	@PostMapping(value = "/resident")
	public ResponseEntity<Response<TokenFRDTO>> includeResident(@RequestBody @Valid UserPDTO userPDTO) {
		log.info("Start - UserController.includeResident - UserPDTO: {}", userPDTO);
		Response<TokenFRDTO> response = new Response<>();

		LoginDTO login = this.userService.includeResident(userPDTO);
		TokenFRDTO token = this.securityService.login(login);
		response.setData(token);

		log.info("End - UserController.includeResident - TokenFRDTO: {}", token);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}

	@PostMapping(value = "/administrator")
	public ResponseEntity<Response<TokenFRDTO>> includeAdministrator(@RequestBody @Valid UserPDTO userPDTO) {
		log.info("Start - UserController.includeAdministrator - UserPDTO: {}", userPDTO);
		Response<TokenFRDTO> response = new Response<>();

		LoginDTO login = this.userService.includeAdministrator(userPDTO);
		TokenFRDTO token = this.securityService.login(login);
		response.setData(token);

		log.info("End - UserController.includeAdministrator - TokenFRDTO: {}", token);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}
}
