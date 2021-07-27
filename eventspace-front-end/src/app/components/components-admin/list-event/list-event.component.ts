import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private service: ListEventService, private panelService: AdminPanelService, private toastr: ToastrService) {
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

  deleteEvent(id: number) {
    const onSuccess = (response: any) => {​​​
      console.log("Evento cancellato con successo", response);
      this.toastr.success('Operazione effettuata', 'Evento cancellato correttamente');
    } ​​​
    const onError = (response: any) => {​​​
      console.log("Errore", response);
      this.toastr.error('Errore', 'Cancellazione non andata a buon fine');
    }​​​
    console.log(id);
    this.service.deleteEvent(id).subscribe(onSuccess, onError);
  }

  addEvent() {
    this.type = "Inserisci";
    this.event = new Event(0, "", "", "", "", "", "", "");
  }

}
