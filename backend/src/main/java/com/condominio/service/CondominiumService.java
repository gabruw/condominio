package com.condominio.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.condominio.dto.OptionDTO;
import com.condominio.dto.condominium.CondominiumPDTO;
import com.condominio.dto.condominium.CondominiumRDTO;

public interface CondominiumService {

	Page<CondominiumRDTO> findAll(Pageable pageable);

	CondominiumRDTO findById(Long id);

	CondominiumRDTO findByName(String name);

	List<OptionDTO<Long>> findOptions();

	CondominiumRDTO include(CondominiumPDTO condominiumPDTO);
}
