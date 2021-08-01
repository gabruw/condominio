package com.condominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.condominio.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

}
