package com.example.eventi.entites;

public class Event_like {
	
	private int user_id;
	private int evento_id;
	
	public Event_like() {
		// TODO Auto-generated constructor stub
	}

	public Event_like(int user_id, int evento_id) {
		
		this.user_id = user_id;
		this.evento_id = evento_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getEvent_id() {
		return evento_id;
	}

	public void setEvent_id(int evento_id) {
		this.evento_id = evento_id;
	}
	
}
