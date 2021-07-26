import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event_like } from 'src/app/model/event_like';

@Injectable({
  providedIn: 'root'
})
export class GridEventService {
  url : string = "http://localhost:8080/event";
  url_user: string = "http://localhost:8080/user";

  id_user!: number;

  constructor(private http: HttpClient) { }
  
  getAllEvent(): Observable<Event[]>{
    console.log( this.http.get(this.url));
    return this.http.get<Event[]>(this.url+"/getEvents"); 
  }

  addEventList(event_id: number) {
    console.log(sessionStorage.getItem("id_user"));
    const body = JSON.stringify({"event_id": event_id, "user_id": parseInt(sessionStorage.getItem("id_user") || '')}); 
    const header = {'content-type' : 'application/json'};
    return this.http.post("http://localhost:8080/user/addEventLike", body, {'headers': header});
  }
}
