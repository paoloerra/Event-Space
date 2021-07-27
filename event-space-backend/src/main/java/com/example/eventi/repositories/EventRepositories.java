package com.example.eventi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.eventi.entites.Event;
import com.example.eventi.entites.User;
@Repository
public interface EventRepositories extends JpaRepository<Event, Long> {
	
	@Query(value= "SELECT * FROM Event e Join event_like le on le.evento_id=e.event_id join user u on le.user_id=u.id", nativeQuery = true)
	public List<Event> getEventUser();

	//funzione eventi  preferiti di un utente
	@Query(value= "SELECT * FROM Event e Join event_prefer lp on lp.evento_id=e.event_id join user u on lp.user_id=u.id where u.id=?1 ", nativeQuery = true)
    public List<Event> getEventPrefer(@Param("id") long id);
	//funzione eventi  preferiti di un utente
	@Query(value= "SELECT * FROM Event e Join event_like le on le.evento_id=e.event_id join user u on le.user_id=u.id where u.id=?1 ", nativeQuery = true)
	public List<Event> getEventCar(@Param("id") long id);
		
	//funzione carrello
	@Query(value= "SELECT * FROM Event e WHERE e.category=?1 ", nativeQuery = true)
    public List<Event> getEventByCatergoy(@Param("category") String category);
	
    @Query(value ="SELECT * FROM Event e WHERE (e.name LIKE CONCAT('%',:name,'%') OR e.description LIKE CONCAT('%',:description,'%') OR e.category LIKE CONCAT('%',:category,'%') OR e.location LIKE CONCAT('%',:location,'%')", nativeQuery = true)
    public List<Event> findEventWithPartOf(@Param("name") String name, @Param("description") String description, @Param("category") String category, @Param("location") String location);

    

}
