import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {
  url : string = "http://localhost:8080/user";


  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url+"/getUsers"); 
  }

  deleteUser(id: number) : any {
    const header = {​​​'content-type' : 'application/json'}​​​
    console.log(`${this.url}/deleteUser/${id}`​​​);
    return this.http.delete(`${this.url}/deleteUser/${id}`​​​);
  }

}
