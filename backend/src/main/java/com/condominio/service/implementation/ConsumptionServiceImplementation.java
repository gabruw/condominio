package com.condominio.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condominio.dto.consumption.ConsumptionFADTO;
import com.condominio.dto.consumption.ConsumptionPDTO;
import com.condominio.dto.consumption.ConsumptionRDTO;
import com.condominio.entity.Consumption;
import com.condominio.repository.ConsumptionRepository;
import com.condominio.service.ConsumptionService;
import com.condominio.service.processor.ConsumptionProcessor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ConsumptionServiceImplementation implements ConsumptionService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private ConsumptionProcessor consumptionProcessor;

	@Autowired
	private ConsumptionRepository consumptionRepository;

	@Override
	public List<ConsumptionRDTO> findAllByUnity(String unity) {
		log.info("Start - ConsumptionServiceImplementation.findAllByUnity - Unity: {}", unity);

		List<Consumption> consumptions = this.consumptionRepository.findAllByUserUnity(unity);
		List<ConsumptionRDTO> consumptionsRDTO = consumptions.stream()
				.map(consumption -> this.mapper.map(consumption, ConsumptionRDTO.class)).collect(Collectors.toList());

		log.info("End - ConsumptionServiceImplementation.findAllByUnity - List<ConsumptionRPDTO>: {}",
				consumptionsRDTO);
		return consumptionsRDTO;
	}

	@Override
	public List<ConsumptionRDTO> findAllByReadDateBetweenAndUnity(ConsumptionFADTO consumptionFADTO) {
		log.info("Start - ConsumptionServiceImplementation.findAllByReadDateBetweenAndUnity - ConsumptionFADTO: {}",
				consumptionFADTO);

		List<Consumption> consumptions = this.consumptionRepository.findAllByReadDateBetweenAndUserUnity(
				consumptionFADTO.getStartReadDate(), consumptionFADTO.getEndReadDate(), consumptionFADTO.getUnity());
		List<ConsumptionRDTO> consumptionsRDTO = consumptions.stream()
				.map(consumption -> this.mapper.map(consumption, ConsumptionRDTO.class)).collect(Collectors.toList());

		log.info("End - ConsumptionServiceImplementation.findAllByReadDateBetweenAndUnity - List<ConsumptionRDTO>: {}",
				consumptionsRDTO);
		return consumptionsRDTO;
	}

	@Override
	public ConsumptionRDTO findById(Long id) {
		log.info("Start - ConsumptionServiceImplementation.findById - Id: {}", id);

		Consumption consumption = this.consumptionProcessor.exists(id);
		ConsumptionRDTO consumptionRDTO = this.mapper.map(consumption, ConsumptionRDTO.class);

		log.info("End - ConsumptionServiceImplementation.findById - ConsumptionRDTO: {}", consumptionRDTO);
		return consumptionRDTO;
	}

	@Override
	public ConsumptionRDTO include(ConsumptionPDTO consumptionPDTO) {
		log.info("Start - ConsumptionServiceImplementation.include - ConsumptionPDTO: {}", consumptionPDTO);

		Consumption consumption = this.mapper.map(consumptionPDTO, Consumption.class);
		consumption = this.consumptionRepository.save(consumption);

		ConsumptionRDTO consumptionRDTO = this.mapper.map(consumption, ConsumptionRDTO.class);

		log.info("End - ConsumptionServiceImplementation.include - ConsumptionRDTO: {}", consumptionRDTO);
		return consumptionRDTO;
	}
}
