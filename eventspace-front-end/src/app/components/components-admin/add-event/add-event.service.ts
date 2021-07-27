import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/model/event';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {

  url : string = "http://localhost:8080/event";

  constructor(private http: HttpClient) {​​​ }​​​
  
  addEvent(data: Event): any {​​​
    const body = JSON.stringify(data);
    console.log(body);
    const header = {​​​'content-type' : 'application/json'}​​​
    console.log(this.url + "/saveEvent");
    return this.http.post(this.url + "/saveEvent", body, {​​​'headers': header}​​​);
  }​​​

  updateEvent(data: Event) : any {
    const body = JSON.stringify(data);
    console.log(body);
    const header = {​​​'content-type' : 'application/json'}​​​
    console.log(this.url + "/updateEvent");
    return this.http.put(this.url + "/updateEvent", body, {​​​'headers': header}​​​);
  }



}
