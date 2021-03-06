package com.condominio.dto.address;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.condominio.annotation.CEP;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddressRPDTO implements Serializable {

	private static final long serialVersionUID = 7928629626907491236L;

	@CEP
	@Size(min = 9, max = 9, message = "O campo 'CEP' deve conter 9 caracteres")
	private String cep;

	@NotBlank(message = "O campo 'Rua' é obrigatório")
	@Size(min = 1, max = 255, message = "O campo 'Rua' deve conter entre 1 e 255 caracteres")
	private String street;

	@NotBlank(message = "O campo 'Bairro' é obrigatório")
	@Size(min = 1, max = 255, message = "O campo 'Bairro' deve conter entre 1 e 255 caracteres")
	private String neighborhood;

	@NotNull(message = "O campo 'Número' é obrigatório")
	private Integer number;

	@NotBlank(message = "O campo 'Complemento' é obrigatório")
	@Size(max = 255, message = "O campo 'Complemento' deve conter no máximo 255 caracteres")
	private String complement;

	@NotBlank(message = "O campo 'Nº de Telefone' é obrigatório")
	@Size(min = 14, max = 14, message = "O campo 'Nº de Telefone' deve conter 14 caracteres")
	private String phone;
}
