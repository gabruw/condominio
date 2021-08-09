package com.condominio.dto.consumption;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GeneralReportDTO implements Serializable {

	private static final long serialVersionUID = 5067148495118188973L;

	@NotBlank(message = "O campo 'Unidade' é obrigatório")
	@Size(min = 1, max = 10, message = "O campo 'Unidade' deve conter entre 1 e 10 caracteres")
	private String unity;

	@NotNull(message = "O campo 'Leitura Total' é obrigatório")
	private Long total;
}
