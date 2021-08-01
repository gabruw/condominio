package com.condominio.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condominio.dto.OptionDTO;
import com.condominio.dto.condominium.CondominiumPDTO;
import com.condominio.dto.condominium.CondominiumRDTO;
import com.condominio.entity.Condominium;
import com.condominio.repository.CondominiumRepository;
import com.condominio.service.CondominiumService;
import com.condominio.service.processor.CondominiumProcessor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CondominiumServiceImplementation implements CondominiumService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private CondominiumProcessor condominiumProcessor;

	@Autowired
	private CondominiumRepository condominiumRepository;

	@Override
	public CondominiumRDTO findById(Long id) {
		log.info("Start - CondominiumServiceImplementation.findById - Id: {}", id);

		Condominium condominium = this.condominiumProcessor.exists(id);
		CondominiumRDTO condominiumRDTO = this.mapper.map(condominium, CondominiumRDTO.class);

		log.info("End - CondominiumServiceImplementation.findById - CondominiumRDTO: {}", condominiumRDTO);
		return condominiumRDTO;
	}

	@Override
	public CondominiumRDTO findByName(String name) {
		log.info("Start - CondominiumServiceImplementation.findByName - Name: {}", name);

		Condominium condominium = this.condominiumProcessor.exists(name);
		CondominiumRDTO condominiumRDTO = this.mapper.map(condominium, CondominiumRDTO.class);

		log.info("End - CondominiumServiceImplementation.findByName - CondominiumRDTO: {}", condominiumRDTO);
		return condominiumRDTO;
	}

	@Override
	public List<OptionDTO<Long>> findOptions() {
		log.info("Start - CondominiumServiceImplementation.findOptions");

		List<Condominium> condominiums = this.condominiumRepository.findAll();
		List<OptionDTO<Long>> options = condominiums.stream().map(
				condominium -> OptionDTO.<Long>builder().text(condominium.getName()).value(condominium.getId()).build())
				.collect(Collectors.toList());

		log.info("End - CondominiumServiceImplementation.findOptions - List<OptionDTO<Long>>: {}", options);
		return options;
	}

	@Override
	public CondominiumRDTO include(CondominiumPDTO condominiumPDTO) {
		log.info("Start - CondominiumServiceImplementation.include - CondominiumPDTO: {}", condominiumPDTO);

		this.condominiumProcessor.alreadyExists(condominiumPDTO.getName());

		Condominium condominium = this.mapper.map(condominiumPDTO, Condominium.class);
		condominium.getAddress().setCondominium(null);

		condominium = this.condominiumRepository.save(condominium);

		CondominiumRDTO condominiumRDTO = this.mapper.map(condominium, CondominiumRDTO.class);

		log.info("End - CondominiumServiceImplementation.include - CondominiumRDTO: {}", condominiumRDTO);
		return condominiumRDTO;
	}
}
