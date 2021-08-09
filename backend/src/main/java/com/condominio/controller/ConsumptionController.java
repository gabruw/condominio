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

import com.condominio.dto.consumption.ConsumptionFADTO;
import com.condominio.dto.consumption.ConsumptionPDTO;
import com.condominio.dto.consumption.ConsumptionRDTO;
import com.condominio.dto.consumption.GeneralReportDTO;
import com.condominio.service.ConsumptionService;
import com.condominio.util.Response;

import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@NoArgsConstructor
@RequestMapping("/consumption")
public class ConsumptionController {

	@Autowired
	private ConsumptionService consumptionService;

	@Cacheable("consumption")
	@GetMapping(params = "id")
	public ResponseEntity<Response<ConsumptionRDTO>> findById(@RequestParam Long id) {
		log.info("Start - ConsumptionController.findById - Id: {}", id);
		Response<ConsumptionRDTO> response = new Response<>();

		ConsumptionRDTO consumption = this.consumptionService.findById(id);
		response.setData(consumption);

		log.info("End - ConsumptionController.findById - ConsumptionRDTO: {}", consumption);
		return ResponseEntity.ok(response);
	}

	@Cacheable("consumption")
	@GetMapping(params = "unity")
	public ResponseEntity<Response<List<ConsumptionRDTO>>> findAllByUnity(@RequestParam String unity) {
		log.info("Start - ConsumptionController.findAllByUnity - Unity: {}", unity);
		Response<List<ConsumptionRDTO>> response = new Response<>();

		List<ConsumptionRDTO> consumptions = this.consumptionService.findAllByUnity(unity);
		response.setData(consumptions);

		log.info("End - ConsumptionController.findAllByUnity - List<ConsumptionRDTO>: {}", consumptions);
		return ResponseEntity.ok(response);
	}

	@Cacheable("consumption")
	@GetMapping(params = "condominium")
	public ResponseEntity<Response<List<GeneralReportDTO>>> findAllByCondominium(@RequestParam String condominium) {
		log.info("Start - ConsumptionController.findAllByCondominium - Condominium: {}", condominium);
		Response<List<GeneralReportDTO>> response = new Response<>();

		List<GeneralReportDTO> consumptions = this.consumptionService.findAllByCondominium(condominium);
		response.setData(consumptions);

		log.info("End - ConsumptionController.findAllByCondominium - List<GeneralReportDTO>: {}", consumptions);
		return ResponseEntity.ok(response);
	}

	@Cacheable("consumption")
	@PostMapping(value = "/read-date")
	public ResponseEntity<Response<List<ConsumptionRDTO>>> findByReadDateBetweenAndUnity(
			@RequestBody @Valid ConsumptionFADTO consumptionFADTO) {
		log.info("Start - ConsumptionController.findByReadDateBetweenAndUnity - ConsumptionFADTO: {}",
				consumptionFADTO);
		Response<List<ConsumptionRDTO>> response = new Response<>();

		List<ConsumptionRDTO> consumptions = this.consumptionService.findAllByReadDateBetweenAndUnity(consumptionFADTO);
		response.setData(consumptions);

		log.info("End - ConsumptionController.findByReadDateBetweenAndUnity - List<ConsumptionRDTO>: {}", consumptions);
		return ResponseEntity.ok(response);
	}

	@PostMapping
	public ResponseEntity<Response<ConsumptionRDTO>> include(@RequestBody @Valid ConsumptionPDTO consumptionPDTO) {
		log.info("Start - ConsumptionController.include - ConsumptionPDTO: {}", consumptionPDTO);
		Response<ConsumptionRDTO> response = new Response<>();

		ConsumptionRDTO consumption = this.consumptionService.include(consumptionPDTO);
		response.setData(consumption);

		log.info("End - ConsumptionController.include - ConsumptionRDTO: {}", consumption);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}
}
