package com.example.eventi.entites;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String username;
	private String password;
	private String email;
	private int type;
	@OneToMany(mappedBy="user")
    private Set<Role> role;
	


	public long getId() {
		return id;
	}

	@ManyToMany
	@JoinTable(
	  name = "event_like", 
	  joinColumns = @JoinColumn(name = "User_id"), 
	  inverseJoinColumns = @JoinColumn(name = "Evento_id"))
	Set<Event> likedEvents;
	@ManyToMany
	@JoinTable(
			  name = "event_prefer", 
			  joinColumns = @JoinColumn(name = "User_id"), 
			  inverseJoinColumns = @JoinColumn(name = "Evento_id"))
	Set<Event> preferEvents;
	public Set<Role> getRole() {
		return role;
	}

	public void setRole(Set<Role> role) {
		this.role = role;
	}

	public Set<Event> getLikedEvents() {
		return likedEvents;
	}

	public void setLikedEvents(Set<Event> likedEvents) {
		this.likedEvents = likedEvents;
	}

	public User() {}

	public User(String username, String password, String email) {
		this.username = username;
		this.type=0;
		this.password = password;
		this.email = email;
	}


	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public Set<Event> getPreferEvents() {
		return preferEvents;
	}

	public void setPreferEvents(Set<Event> preferEvents) {
		this.preferEvents = preferEvents;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username  + ", password=" + password + ", email="
				+ email + "]";
	}
	
}
