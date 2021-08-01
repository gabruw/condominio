package com.condominio.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.condominio.entity.Consumption;

@Repository
public interface ConsumptionRepository extends JpaRepository<Consumption, Long> {

	@Transactional(readOnly = true)
	List<Consumption> findAllByUserUnity(String unity);

	@Transactional(readOnly = true)
	List<Consumption> findAllByReadDateBetweenAndUserUnity(LocalDate startReadDate, LocalDate endReadDate,
			String unity);
}
