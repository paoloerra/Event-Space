package com.example.eventi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eventi.entites.Role;
import com.example.eventi.repositories.RoleRepositories;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/role")
public class RoleController {

	@Autowired
	private RoleRepositories roleRepositories;

	public RoleController(RoleRepositories roleRepositories) {
		
		this.roleRepositories = roleRepositories;
	}
	
	@GetMapping("/getRoles")
	public List<Role> getRoles(){
		return (List<Role>) roleRepositories.findAll();
	}

	
}
