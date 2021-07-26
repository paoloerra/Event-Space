package com.example.eventi.entites;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Event {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int event_id;
	private String name;
	private Date data;
	private String description;
	private String img_url;
	private String time;
	private String location;
	private String category;
	

	@ManyToMany(mappedBy = "likedEvents")
	Set<User> likesUser;
	@ManyToMany(mappedBy = "preferEvents")
	Set<User> preferUser;

	public Event(String name, Date data, String description, String img_url, String time, String location,
			String category) {
	
		this.name = name;
		this.data = data;
		this.description = description;
		this.img_url = img_url;
		this.time = time;
		this.location = location;
		this.category = category;
	}
	public Event() {}



	public int getId() {
		return event_id;
	}
	public void setId(int id) {
		this.event_id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getImg_url() {
		return img_url;
	}


	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}


	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}


	@Override
	public String toString() {
		return "Event [id=" + event_id + ", name=" + name + ", data=" + data + ", description=" + description + ", img_url="
				+ img_url + ", time=" + time + ", location=" + location + ", category=" + category + "]";
	}
	
}
