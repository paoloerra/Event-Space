import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {

  url : string = "http://localhost:8080/event";

  constructor(private http: HttpClient) {​​​ }​​​
  
  addEvent(data: Event): any {​​​
    const body = JSON.stringify(data);
    const header = {​​​'content-type' : 'application/json'}​​​
    console.log(this.url + "/saveEvent");
    return this.http.post(this.url + "/saveEvent", body, {​​​'headers': header}​​​);
  }​​​
}
