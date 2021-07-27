package com.example.eventi.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component("javasampleapproachMailSender")
public class SendMail {
	
	@Autowired
	public JavaMailSender javaMailSender;
	
	public void sendEmail(String email, String username, String eventName) {
		
		SimpleMailMessage msg = new SimpleMailMessage();
		
		msg.setTo(email);

		msg.setSubject("Dear " + username + ", Your event is on your Wish List!");
		
		msg.setText("Hello " + username + "! The event " + eventName + " is added on your Event List, don't forget to search for more amazing events on our website! EventSpace Team.");
		
		javaMailSender.send(msg);
	}

}
