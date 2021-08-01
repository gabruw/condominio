package com.condominio.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.condominio.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Transactional(readOnly = true)
	Optional<User> findByCpf(String cpf);
}
