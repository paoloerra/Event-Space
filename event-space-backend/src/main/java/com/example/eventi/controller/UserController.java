package com.example.eventi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eventi.email.SendMail;
import com.example.eventi.entites.Event;
import com.example.eventi.entites.Event_like;
import com.example.eventi.entites.User;
import com.example.eventi.repositories.EventRepositories;
import com.example.eventi.repositories.UserRepositories;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	@Qualifier("javasampleapproachMailSender")
	private SendMail email;

	@Autowired
	private UserRepositories userRepository;
	
	@Autowired
	private EventRepositories eventRepository;
	
	public UserController(UserRepositories userRepositories) {
		this.userRepository=userRepositories;
	}
	
	@GetMapping("/getUsers")
	public List<User> getUsers(){
		return (List<User>)userRepository.findAll();
	}
	@PostMapping("/getEventLike")
	public List<Event> getEventLike(@RequestBody User user){
		System.out.println(user);
		System.out.println((List<Event>)user.getLikedEvents());
		return (List<Event>)user.getLikedEvents();
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user){
		User u=userRepository.loginCheck(user.getUsername(), user.getPassword());
		if(u==null) {
			throw new NullPointerException("errore login");
		}else {
			return u;
		}
	}
	@PostMapping("/addusers")//anche addUsers perche riconosce la differenza tra post e get altrimenti va in errore
	public User addUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@PostMapping("/addEventLike")
	public void addEventLike(@RequestBody Event_like e) {
		userRepository.insertLikeEvents(e.getUser_id(), e.getEvent_id());
		User utente = userRepository.getUserById(e.getUser_id());
		Event evento = eventRepository.getById((long) e.getEvent_id());
		email.sendEmail(utente.getEmail(), utente.getUsername(), evento.getName());
	}
	
	@PutMapping("/updateUser")
	public void updateUser(@RequestBody User user) {
		userRepository.save(user);
	}
	
	@DeleteMapping(value="/deleteUser/{id}")
	public List<User> deleteEvent(@PathVariable long id) {
		userRepository.deleteById(id);
		return (List<User>) userRepository.findAll();
	}
}

