package com.condominio.service;

import java.util.List;

import com.condominio.dto.consumption.ConsumptionFADTO;
import com.condominio.dto.consumption.ConsumptionPDTO;
import com.condominio.dto.consumption.ConsumptionRDTO;
import com.condominio.dto.consumption.GeneralReportDTO;

public interface ConsumptionService {

	List<ConsumptionRDTO> findAllByUnity(String unity);
	
	List<GeneralReportDTO> findAllByCondominium(String condominiumName);

	List<ConsumptionRDTO> findAllByReadDateBetweenAndUnity(ConsumptionFADTO consumptionFADTO);

	ConsumptionRDTO findById(Long id);

	ConsumptionRDTO include(ConsumptionPDTO consumptionPDTO);	
}
