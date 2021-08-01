package com.condominio.exception.condominium.notFound;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.condominio.util.Response;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class CondominiumNotFoundExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(CondominiumNotFoundException.class)
	public final ResponseEntity<Object> exceptionHandler(CondominiumNotFoundException exception) {
		log.error("CondominiumNotFoundException - Message: {}", exception);

		Response<Void> response = new Response<>();
		response.addError(exception.getMessage());

		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
}
