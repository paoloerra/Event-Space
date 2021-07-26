import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListEventService {
  url : string = "http://localhost:8080/event";


  constructor(private http: HttpClient) { }

  getAllEvent(): Observable<Event[]>{
    return this.http.get<Event[]>(this.url+"/getEvents"); 
  }

}
