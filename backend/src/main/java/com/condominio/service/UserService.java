package com.condominio.service;

import com.condominio.dto.LoginDTO;
import com.condominio.dto.user.UserPDTO;

public interface UserService {

	LoginDTO includeResident(UserPDTO userPDTO);
	
	LoginDTO includeAdministrator(UserPDTO userPDTO);
}
