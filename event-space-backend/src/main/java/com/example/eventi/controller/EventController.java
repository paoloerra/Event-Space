package com.example.eventi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
		eventRepositories.save(event);
	}
	
	/*@PostMapping("/updateEvent")
	public void updateEvent(@RequestBody Event event) {
		eventRepositories.put(event);
	}*/
	
	@GetMapping("/getEventUser")
	public List<Event> getEventUser(){
		return (List<Event>) eventRepositories.getEventUser();
		
	}
	
	@GetMapping(value = "/getEventList/{id}")
	public List<Event> getEventPrefer(@PathVariable long id){
		System.out.print("sono quaaaaa2");
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
}
