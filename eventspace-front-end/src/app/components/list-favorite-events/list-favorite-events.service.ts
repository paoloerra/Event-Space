import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListFavoriteEventsService {
  url: string = "http://localhost:8080/event";

  constructor(private http: HttpClient) { }

  getAllFavoriteEvents(): Observable<Event[]>{
    console.log("Ho chiamaot il servizio "+sessionStorage.getItem("id_user"));
    console.log(this.url + "/getEventPrefer/"+ sessionStorage.getItem("id_user"));
    const id = sessionStorage.getItem("id_user");
    return this.http.get<Event[]>(`${this.url}/getEventList/${id}`); 

  }
}
