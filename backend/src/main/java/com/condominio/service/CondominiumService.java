package com.condominio.service;

import java.util.List;

import com.condominio.dto.OptionDTO;
import com.condominio.dto.condominium.CondominiumPDTO;
import com.condominio.dto.condominium.CondominiumRDTO;

public interface CondominiumService {

	CondominiumRDTO findById(Long id);

	CondominiumRDTO findByName(String name);

	List<OptionDTO<Long>> findOptions();

	CondominiumRDTO include(CondominiumPDTO condominiumPDTO);
}
