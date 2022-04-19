package com.angular.project.authentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angular.project.authentication.entity.Users;
import com.angular.project.authentication.service.UserService;

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
}
