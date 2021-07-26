import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event';
import { ListFavoriteEventsService } from './list-favorite-events.service';

@Component({
  selector: 'app-list-favorite-events',
  templateUrl: './list-favorite-events.component.html',
  styleUrls: ['./list-favorite-events.component.css']
})
export class ListFavoriteEventsComponent implements OnInit {

  list!: Event[];

  constructor(private service: ListFavoriteEventsService) { 
    const onsucces = (result:any)=>{
      this.list = result;
      console.log(this.list);
    }
    const onerror=()=>{
      console.log("errore getallEvent");
    }
    this.service.getAllFavoriteEvents().subscribe(onsucces, onerror);
  }

  ngOnInit(): void {
  }

}
