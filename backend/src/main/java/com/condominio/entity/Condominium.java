package com.condominio.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "condominium")
@Entity(name = "condominium")
public class Condominium implements Serializable {

	private static final long serialVersionUID = -3126679238930967752L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name", nullable = false, unique = true)
	@Size(min = 1, max = 50, message = "O campo 'Condomínio' deve conter entre 1 e 50 caracteres")
	private String name;
	
	@ToString.Exclude
	@OneToMany(mappedBy = "condominium")
	private List<User> user;

	@ToString.Exclude
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinTable(name = "address_condominium", joinColumns = {
			@JoinColumn(name = "address_id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "condominium_id", referencedColumnName = "id") })
	private Address address;
}
