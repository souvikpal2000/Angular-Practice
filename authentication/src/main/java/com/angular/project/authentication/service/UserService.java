package com.angular.project.authentication.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angular.project.authentication.entity.Users;
import com.angular.project.authentication.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo repo;
	
	public int checkUser(Users u) {
		Users userData = repo.checkUser(u.getUsername());
		if(userData == null) {
			return 0;
		}else {
			return 1;
		}
	}

	public void addUser(Users u) {
		repo.save(u);
	}

	public List<Users> getAllUsers() {
		List<Users> users = repo.findAll();
		return users;
	}
	
	@Transactional
	public void deleteUserByUsername(String username) {
		repo.deleteUserByUsername(username);
		
	}
	
	@Transactional
	public void updateUserByUsername(Users u) {
		repo.save(u);
	}

}
