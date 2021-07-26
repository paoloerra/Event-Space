import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginServiceService } from '../login/login-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {
  USER_NAME_TYPE_ATTRIBUTE_NAME = 'typeuser';
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';


  username = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  isLoggedIn = false;
  userType = sessionStorage.getItem(this.USER_NAME_TYPE_ATTRIBUTE_NAME);


  constructor(private auth: LoginServiceService, private router: Router, private toastr: ToastrService) { }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login");
    this.toastr.success("A presto! 👋", "Logout effettuato")
  }

  ngOnInit(): void {
    //Refresh della nav bar ogni volta che ho un router.events
    this.router.events.subscribe(event => {
      this.isLoggedIn = this.auth.isUserLoggedIn();
      this.userType = sessionStorage.getItem(this.USER_NAME_TYPE_ATTRIBUTE_NAME);
      this.username = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    })  
  }

}
