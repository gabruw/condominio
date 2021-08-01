package com.condominio.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.condominio.dto.OptionDTO;
import com.condominio.dto.condominium.CondominiumPDTO;
import com.condominio.dto.condominium.CondominiumRDTO;
import com.condominio.service.CondominiumService;
import com.condominio.util.Response;

import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@NoArgsConstructor
@RequestMapping("/condominium")
public class CondominiumController {

	@Autowired
	private CondominiumService condominiumService;

	@Cacheable("condominium")
	@GetMapping(params = "id")
	public ResponseEntity<Response<CondominiumRDTO>> findById(@RequestParam Long id) {
		log.info("Start - CondominiumController.findById - Id: {}", id);
		Response<CondominiumRDTO> response = new Response<>();

		CondominiumRDTO condominium = this.condominiumService.findById(id);
		response.setData(condominium);

		log.info("End - CondominiumController.findById - CondominiumRDTO: {}", condominium);
		return ResponseEntity.ok(response);
	}

	@Cacheable("condominium")
	@GetMapping(params = "name")
	public ResponseEntity<Response<CondominiumRDTO>> findByName(@RequestParam String name) {
		log.info("Start - CondominiumController.findByName - Name: {}", name);
		Response<CondominiumRDTO> response = new Response<>();

		CondominiumRDTO condominium = this.condominiumService.findByName(name);
		response.setData(condominium);

		log.info("End - CondominiumController.findByName - SectorRPDTO: {}", condominium);
		return ResponseEntity.ok(response);
	}

	@Cacheable("sector")
	@GetMapping(value = "/options")
	public ResponseEntity<Response<List<OptionDTO<Long>>>> findOptions() {
		log.info("Start - CondominiumController.findOptions");
		Response<List<OptionDTO<Long>>> response = new Response<>();

		List<OptionDTO<Long>> options = this.condominiumService.findOptions();
		response.setData(options);

		log.info("End - CondominiumController.findOptions - List<OptionDTO<Long>>: {}", options);
		return ResponseEntity.ok(response);
	}

	@PostMapping
	public ResponseEntity<Response<CondominiumRDTO>> include(@RequestBody @Valid CondominiumPDTO condominiumPDTO) {
		log.info("Start - CondominiumController.include - SectorHRPDTO: {}", condominiumPDTO);
		Response<CondominiumRDTO> response = new Response<>();

		CondominiumRDTO condominiumRDTO = this.condominiumService.include(condominiumPDTO);
		response.setData(condominiumRDTO);

		log.info("End - CondominiumController.include - SectorHRPDTO: {}", condominiumRDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}
}
