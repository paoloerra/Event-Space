package com.example.eventi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eventi.entites.Event;
import com.example.eventi.entites.User;
import com.example.eventi.repositories.EventRepositories;

@RestController
@RequestMapping("/event")
@CrossOrigin(origins = "*")

public class EventController {
	
	@Value("${upload.path}")
	private String uploadPath;

	@Autowired
	private EventRepositories eventRepositories;

	public EventController(EventRepositories eventRepositories) {	
		this.eventRepositories = eventRepositories;
	}
	
	@GetMapping("/getEvents")
	public List<Event> getEvent(){
		return (List<Event>) eventRepositories.findAll();
	}
	
	@PostMapping("/saveEvent")
	public void addEvent(@RequestBody Event event) {
		event.setImg_url("assets/images/" + event.getImg_name());
		System.out.println(event);
		eventRepositories.save(event);
	}
	
	@GetMapping("/getEventUser")
	public List<Event> getEventUser(){
		return (List<Event>) eventRepositories.getEventUser();
		
	}
	
	@GetMapping(value = "/getEventList/{id}")
	public List<Event> getEventPrefer(@PathVariable long id){
		return (List<Event>) eventRepositories.getEventCar(id);
		
	}
	
	@GetMapping("/getEventCar")
	public List<Event> getEventCar(User user){
		return (List<Event>) eventRepositories.getEventCar(user.getId());
		
	}
	
	@GetMapping("/getEventByCategory")
	public List<Event> getEventByCategory(@RequestBody String category){
		return (List<Event>) eventRepositories.getEventByCatergoy(category);
		
	}
	
	@GetMapping("/findEventWithPartOf")
	public List<Event> findEventWithPartOf(@RequestBody String name, @RequestBody String description, @RequestBody String category, @RequestBody String location){
		return (List<Event>) eventRepositories.findEventWithPartOf(name, description, category, location);
	}
	
	@DeleteMapping(value ="/deleteEvent/{id}")
	public List<Event> deleteEvent(@PathVariable long id) {
		eventRepositories.deleteById(id);
		return (List<Event>) eventRepositories.findAll();
	}
	
	@PutMapping("/updateEvent")
	public void updateEvent(@RequestBody Event event) {
		System.out.println("Sto modificando l'evento");
		eventRepositories.save(event);
	}
	
}
