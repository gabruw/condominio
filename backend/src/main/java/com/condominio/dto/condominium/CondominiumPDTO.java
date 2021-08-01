package com.condominio.dto.condominium;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.condominio.dto.address.AddressRPDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CondominiumPDTO implements Serializable {

	private static final long serialVersionUID = 5138068658961969752L;

	@NotBlank(message = "O campo 'Condomínio' é obrigatório")
	@Size(min = 1, max = 50, message = "O campo 'Condomínio' deve conter entre 1 e 50 caracteres")
	private String name;

	@NotNull(message = "O campo 'Endereço' é obrigatório")
	private AddressRPDTO address;
}
