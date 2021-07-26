import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event';
import { AdminPanelService } from '../admin-panel.service';
import { ListEventService } from './list-event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  type = "";
  events!: Event[];

  event!: any;

  constructor(private service: ListEventService, private panelService: AdminPanelService) {
    this.getAllEvents();
   }

  ngOnInit(): void {
    this.event = new Event(0, "", "", "", "", "", "", "");
  }

  getAllEvents() {
    const onsucces = (result:any)=>{
      console.log(result);
      this.events = result;
    }
    const onerror=()=>{
      console.log("Error: GetAllEvents()");
    }
    this.service.getAllEvent().subscribe(onsucces,onerror);
  }

  updateEvent(index: number) {
    this.type = "Modifica";
    //console.log(index);
    this.event = this.events[index];
    //console.log(this.events[index]);
  }

  addEvent() {
    this.type = "Inserisci";
    this.event = new Event(0, "", "", "", "", "", "", "");
  }

}
