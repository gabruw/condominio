package com.condominio.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.condominio.entity.Condominium;

@Repository
public interface CondominiumRepository extends JpaRepository<Condominium, Long> {

	@Transactional(readOnly = true)
	Page<Condominium> findAll(Pageable pageable);

	@Transactional(readOnly = true)
	Optional<Condominium> findByName(String email);
}
