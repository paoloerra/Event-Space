package com.example.eventi.entites;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Role {
	@ManyToOne
	@JoinColumn(name="fk_user_id", nullable=false)
	private User user;
	
	@Id
	private long Id;
	private String roleName;
	
	public Role() {}
	
	public Role(String roleName) {
		this.roleName = roleName;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Role [Id=" + Id + ", roleName=" + roleName + "]";
	}
	
	
}
