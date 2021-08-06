package com.condominio.entity;

import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "consumption")
@Entity(name = "consumption")
public class Consumption implements Serializable {

	private static final long serialVersionUID = -4520661629094456421L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "hydrometerSerial", nullable = false)
	@NotNull(message = "O campo 'Número de Série do Hidrometro' é obrigatório")
	private BigInteger hydrometerSerial;

	@Column(name = "revision", nullable = false)
	@NotNull(message = "O campo 'Leitura' é obrigatório")
	private Long revision;

	@Column(name = "readDate", nullable = false)
	@NotNull(message = "O campo 'Data da leitura' é obrigatório")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private LocalDate readDate;

	@ToString.Exclude
	@ManyToOne
	@JoinColumn(name = "consumption_id", referencedColumnName = "id", nullable = false)
	private User user;
}
