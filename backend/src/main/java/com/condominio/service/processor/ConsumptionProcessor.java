package com.condominio.service.processor;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.condominio.entity.Consumption;
import com.condominio.exception.consumption.notFound.ConsumptionNotFoundException;
import com.condominio.repository.ConsumptionRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class ConsumptionProcessor {

	@Autowired
	private ConsumptionRepository consumptionRepository;

	public Consumption exists(Long id) {
		log.info("Start - ConsumptionProcessor.exists - Id: {}", id);

		Optional<Consumption> optConsumption = this.consumptionRepository.findById(id);
		if (optConsumption.isEmpty()) {
			log.error("CondominiumNotFoundException - Id: {}", id);
			throw new ConsumptionNotFoundException();
		}

		log.info("End - ConsumptionProcessor.exists - Consumption: {}", optConsumption.get());
		return optConsumption.get();
	}
}
