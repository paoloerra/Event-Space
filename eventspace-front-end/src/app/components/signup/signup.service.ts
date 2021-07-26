import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url : string = "http://localhost:8080/user";
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

 
  constructor(private http: HttpClient) { }
 

  //Registrazione
  addUser(data: User): Observable<User> {
    const body = JSON.stringify(data);
    const header = {'content-type' : 'application/json'}
    console.log(this.url + "/addusers");
    return this.http.post<User>(this.url + "/addusers", body, {'headers': header});
  }

  registerSuccessfulSignUp(username:string, id: number) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem("id_user", id.toString())
  }

}
