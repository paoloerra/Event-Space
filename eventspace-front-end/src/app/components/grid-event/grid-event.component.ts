import { Component, Input, SimpleChange } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/model/event';
import { GridEventService } from './grid-event.service';

@Component({
  selector: 'app-grid-event',
  templateUrl: './grid-event.component.html',
  styleUrls: ['./grid-event.component.css']
})
export class GridEventComponent {

  eventi:Event[] = [];
  
  searchText!: string;

  likes: Boolean[] = [];

  @Input('categoria')
  categoria!: string; 

  ngOnChange(changes: SimpleChange) {
    this.categoria = changes.currentValue;
  }

  constructor(private gridService:GridEventService, private toastr: ToastrService){  
    const onsucces = (result:any)=>{
      this.eventi = result;
    }
    const onerror=()=>{
      console.log("errore getallEvent");
    }
    this.gridService.getAllEvent().subscribe(onsucces,onerror);    
  }

  addEventList(id: number) {
    console.log("Evento cliccato:" +id);

    const onsucces = (result: any)=>{
      this.toastr.success("Evento aggiunto alla tua lista");
      console.log(result);
    }
    const onerror=(error: any)=>{
      console.log("errore getallEvent:" + JSON.stringify(error));
      this.toastr.error("Questo evento è già stato aggiunto alla tua lista");

    }
    this.gridService.addEventList(id).subscribe(onsucces, onerror);
  }
}