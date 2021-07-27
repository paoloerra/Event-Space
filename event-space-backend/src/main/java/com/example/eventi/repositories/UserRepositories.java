package com.example.eventi.repositories;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.eventi.entites.Event_like;
import com.example.eventi.entites.User;
@Repository
public interface UserRepositories extends CrudRepository<User, Long>{
	@Query(value= "SELECT * FROM USER u WHERE u.username = ?1 and u.password = ?2", nativeQuery = true)
    public User loginCheck(@Param("username")String username, @Param("password") String password);
	
	@Transactional
	@Modifying
	@Query(value= "INSERT INTO event_like (user_id, evento_id) VALUES (?1, ?2);", nativeQuery = true)
    public void insertLikeEvents(@Param("user_id")int userid, @Param("evento_id") int eventid);
	
	@Query(value = "SELECT * FROM USER WHERE id = ?1", nativeQuery = true)
	public User getUserById(@Param("id")int userid);
	

}
