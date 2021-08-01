package com.condominio.service.processor;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.condominio.entity.Condominium;
import com.condominio.exception.condominium.alreadyExists.CondominiumAlreadyExistsException;
import com.condominio.exception.condominium.notFound.CondominiumNotFoundException;
import com.condominio.repository.CondominiumRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class CondominiumProcessor {

	@Autowired
	private CondominiumRepository condominiumRepository;

	public Condominium exists(Long id) {
		log.info("Start - CondominiumProcessor.exists - Id: {}", id);

		Optional<Condominium> optCondominium = this.condominiumRepository.findById(id);
		if (optCondominium.isEmpty()) {
			log.error("CondominiumNotFoundException - Id: {}", id);
			throw new CondominiumNotFoundException();
		}

		log.info("End - CondominiumProcessor.exists - Condominium: {}", optCondominium.get());
		return optCondominium.get();
	}

	public Condominium exists(String name) {
		log.info("Start - CondominiumProcessor.exists - Name: {}", name);

		Optional<Condominium> optCondominium = this.condominiumRepository.findByName(name);
		if (optCondominium.isEmpty()) {
			log.error("CondominiumNotFoundException - Name: {}", name);
			throw new CondominiumNotFoundException();
		}

		log.info("End - CondominiumProcessor.exists - Condominium: {}", optCondominium.get());
		return optCondominium.get();
	}

	public void alreadyExists(String name) {
		log.info("Start - CondominiumProcessor.alreadyExists - Name: {}", name);

		Optional<Condominium> optCondominium = this.condominiumRepository.findByName(name);
		if (optCondominium.isPresent()) {
			log.error("CondominiumAlreadyExistsException - Name: {}", name);
			throw new CondominiumAlreadyExistsException();
		}

		log.info("End - CondominiumProcessor.alreadyExists");
	}
}
