package com.condominio.exception.consumption.notFound;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.condominio.util.Response;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class ConsumptionNotFoundExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(ConsumptionNotFoundException.class)
	public final ResponseEntity<Object> exceptionHandler(ConsumptionNotFoundException exception) {
		log.error("ConsumptionNotFoundException - Message: {}", exception);

		Response<Void> response = new Response<>();
		response.addError(exception.getMessage());

		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
	}
}
