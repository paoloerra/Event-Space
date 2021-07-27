import {​​​ Component, Input, OnInit, SimpleChanges }​​​ from '@angular/core';
import {​​​ FormBuilder, FormGroup, Validators }​​​ from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/model/event';
import { AddEventService } from './add-event.service';


@Component({​​​
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
}​​​)

export class AddEventComponent implements OnInit {​​​
  @Input()
  type = "";
 
  eventForm!: FormGroup;

  @Input()
  event!: Event;

  event_add!: Event;

  selectedFiles! : File;

  selectFile(event: any) : void {
    this.selectedFiles = event.target.files[0].name;
    console.log(this.selectedFiles);
    this.eventForm.patchValue({'img_name' : this.selectedFiles});
  }

  ngOnChanges() {
    console.log(this.type);
    console.log(this.event);
  }

  constructor(private addevent: AddEventService, private formBuilder: FormBuilder, private toastr: ToastrService) {​​​ 
  }​​​

  CUEvent() {
    if(this.type == "Inserisci") {
      this.addEvent();
    }
    else if(this.type == "Modifica") {
      this.updateEvent();
    }
  }

  addEvent() {​​​
    const onSuccess = (response: any) => {​​​
      console.log("Evento aggiunto con successo", response);
      this.toastr.success('Operazione effettuata', 'Evento inserito correttamente');
    } ​​​
    const onError = (response: any) => {​​​
      console.log("Errore", response);
      this.toastr.error('Errore', 'Inserimento non andata a buon fine');
    }​​​
    console.log(this.eventForm.value);
    this.addevent.addEvent(this.eventForm.value).subscribe(onSuccess, onError);
  }​​​

  updateEvent() {
    const onSuccess = (response: any) => {​​​
      console.log("Evento aggiornato con successo", response);
      this.toastr.success('Operazione effettuata', 'Evento aggiornato correttamente');
    } ​​​
    const onError = (response: any) => {​​​
      console.log("Errore", response);
      this.toastr.error('Errore', 'Aggiornamento non andato a buon fine');
    }​​​
    console.log(this.eventForm.value);
    this.addevent.updateEvent(this.eventForm.value).subscribe(onSuccess, onError);
  }

  ngOnInit(): void {​​​
    this.eventForm = this.formBuilder.group({​​​
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      location: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      category: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      description: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      data: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      time: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      img_url: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      img_name: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    }​​​);
  }​​​
}​​​