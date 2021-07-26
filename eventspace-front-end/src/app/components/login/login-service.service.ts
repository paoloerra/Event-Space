import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  USER_NAME_TYPE_ATTRIBUTE_NAME = 'typeuser';

  url : string = "http://localhost:8080/user";
  username!: string;
  password!: string;

  role: number = -1;

  constructor(private http: HttpClient) { }

  login(username: String, password: String) : Observable<User>  {  
    const body = JSON.stringify({"username": username, "password": password}); 
    const header = {'content-type' : 'application/json'};
    return this.http.post<User>(this.url + "/login", body, {'headers': header});
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username:string, password:string, type: string, id_user: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(this.USER_NAME_TYPE_ATTRIBUTE_NAME, type);
    sessionStorage.setItem("id_user", id_user);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.USER_NAME_TYPE_ATTRIBUTE_NAME);
    sessionStorage.removeItem("id_user");

    this.username = "";
    this.password = "";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

}
