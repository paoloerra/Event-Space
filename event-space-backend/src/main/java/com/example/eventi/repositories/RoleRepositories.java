package com.example.eventi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.eventi.entites.Role;
@Repository
public interface RoleRepositories extends CrudRepository<Role, Long>{

}
