package com.example.eventi;

import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.eventi.entites.Event;
import com.example.eventi.entites.User;
import com.example.eventi.repositories.EventRepositories;
import com.example.eventi.repositories.RoleRepositories;
import com.example.eventi.repositories.UserRepositories;


@SpringBootApplication
public class ProgettoEventiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProgettoEventiApplication.class, args);
	}
	
	@Bean
	CommandLineRunner init(UserRepositories u,EventRepositories e,RoleRepositories r) {
		return args->{
			User user1=new User("paolo_erra","e32ae4e0d9158c00684ec73ce7803ab1","paolo@gmail.com");
			User user2=new User("Michele","Michele" +"pw","michele@gmail.com");
			User admin = new User("admin", "21232f297a57a5a743894a0e4a801fc3", "admin@gmail.com");
			admin.setType(1);
			u.save(admin);
			
			//u.save(user1);
			
			Date date=new Date();
	        //long miliseconds = System.currentTimeMillis();
			Event event1=new Event("Evento1",date,"Evento1 descrizione evento", "assets/images/event1.jpg","15:00","Napoli,piazza plebiscito","Sport");
			Event event2=new Event("Evento2",date,"Evento2"+ "  descrizione evento", "assets/images/event_3.jpg","16:00","Salerno","Sport");
			Event event3=new Event("Evento3",date,"Evento3"+ "  descrizione evento", "assets/images/event_5.jpg","16:00","Avellino","Sport");
			Event event4=new Event("Evento4",date,"Evento4"+ "  descrizione evento", "assets/images/event_4.jpg","16:00","Avellino","Music");
			
			e.save(event1);
			e.save(event2);
			e.save(event3);
			e.save(event4);
			Set<Event> s=new HashSet<Event>();
			s.add(event1);
			s.add(event2);
			user1.setLikedEvents(s);
			Set<Event> s2=new HashSet<Event>();
			s2.add(event3);
			s2.add(event4);
			user2.setPreferEvents(s2);
			u.save(user1);

		};
		
		
	}

}
