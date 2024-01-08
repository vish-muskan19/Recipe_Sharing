package com.example.Service;

import com.example.model.User;

public interface UserService {
	
	public User findUserById(Long userId)throws Exception;

	public  User findUserByJwt(String jwt)throws Exception;
}
