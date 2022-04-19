package com.angular.project.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.angular.project.authentication.entity.Users;

public interface UserRepo extends JpaRepository<Users, Integer> {
	
	@Query(nativeQuery = true, value="SELECT * FROM users WHERE username=:username")
	Users checkUser(String username);

}
