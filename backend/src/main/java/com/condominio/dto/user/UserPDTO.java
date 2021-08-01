package com.condominio.dto.user;

import java.io.Serializable;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.condominio.constant.Gender;
import com.condominio.dto.IdentificatorDTO;
import com.condominio.dto.authentication.AuthenticationRPDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserPDTO implements Serializable {

	private static final long serialVersionUID = 473950750193819445L;

	@NotBlank(message = "O campo 'Nome' é obrigatório")
	@Size(min = 1, max = 200, message = "O campo 'Nome' deve conter entre 1 e 200 caracteres")
	private String name;

	@NotBlank(message = "O campo 'CPF' é obrigatório")
	@Size(min = 14, max = 14, message = "O campo 'CPF' deve conter 14 caracteres")
	private String cpf;

	@NotBlank(message = "O campo 'Nº de Celular' é obrigatório")
	@Size(min = 16, max = 16, message = "O campo 'Nº de Celular' deve conter 16 caracteres")
	private String cell;
	
	@NotBlank(message = "O campo 'Unidade' é obrigatório")
	@Size(min = 1, max = 10, message = "O campo 'Unidade' deve conter entre 1 e 10 caracteres")
	private String unity;

	@Enumerated(EnumType.STRING)
	@NotNull(message = "O campo 'Gênero' é obrigatório")
	private Gender gender;
	
	@NotNull(message = "O campo 'Condomínio' é obrigatório")
	private IdentificatorDTO condominium;

	@NotNull(message = "O campo 'Autenticação' é obrigatório")
	private AuthenticationRPDTO authentication;
}
