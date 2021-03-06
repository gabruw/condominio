package com.condominio.dto.consumption;

import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import com.condominio.dto.IdentificatorDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsumptionPDTO implements Serializable {

	private static final long serialVersionUID = -2253166833941072478L;

	@NotNull(message = "O campo 'Número de Série do Hidrometro' é obrigatório")
	private BigInteger hydrometerSerial;

	@NotNull(message = "O campo 'Leitura' é obrigatório")
	private Long read;

	@NotNull(message = "O campo 'Data da leitura' é obrigatório")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private LocalDate readDate;

	@NotNull(message = "O campo 'Usuário' é obrigatório")
	private IdentificatorDTO user;
}
