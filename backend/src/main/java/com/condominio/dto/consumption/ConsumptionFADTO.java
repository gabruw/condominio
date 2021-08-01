package com.condominio.dto.consumption;

import java.io.Serializable;
import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsumptionFADTO implements Serializable {

	private static final long serialVersionUID = 5458365098400148361L;

	@NotBlank(message = "O campo 'Unidade' é obrigatório")
	@Size(min = 1, max = 10, message = "O campo 'Unidade' deve conter entre 1 e 10 caracteres")
	private String unity;

	@NotNull(message = "O campo 'Data Final' é obrigatório")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private LocalDate endReadDate;

	@NotNull(message = "O campo 'Data Inicial' é obrigatório")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private LocalDate startReadDate;
}
