package com.angular.project.authentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angular.project.authentication.entity.Users;
import com.angular.project.authentication.service.UserService;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping("/adduser")
	public String addUser(@RequestBody Users u) {
		if(service.checkUser(u) == 0) {
			service.addUser(u);
			return "User Registered Successfully!!!";
		}
		else {
			return "This Username is Already Registered!!!";
		}
		
	}
	
	@GetMapping("/getusers")
	public List<Users> getAllUsers(){
		List<Users> users = service.getAllUsers();
		return users;
	}
	
	@DeleteMapping("/deleteuser/{username}")
	public void deleteUser(@PathVariable("username") String username) {
		service.deleteUserByUsername(username);
	}
}
