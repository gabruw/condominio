package com.condominio.exception.condominium.alreadyExists;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.condominio.util.Response;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class CondominiumAlreadyExistsExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(CondominiumAlreadyExistsException.class)
	public final ResponseEntity<Object> exceptionHandler(CondominiumAlreadyExistsException exception) {
		log.error("CondominiumAlreadyExistsException - Message: {}", exception);

		Response<Void> response = new Response<>();
		response.addError(exception.getMessage());

		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
}
