import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { ListUserService } from './list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users!: User[];

  type = "";
  user!: User;

  constructor(private service: ListUserService, private toastr: ToastrService) {
    this.getAllUsers();
  }

  ngOnInit(): void {
  }

  deleteUser(id: number) {
    const onSuccess = (response: any) => {​​​
      console.log("Utente cancellato con successo", response);
      this.toastr.success('Operazione effettuata', 'Utente cancellato correttamente');
      this.getAllUsers();
    } ​​​
    const onError = (response: any) => {​​​
      console.log("Errore", response);
      this.toastr.error('Errore', 'Cancellazione non andata a buon fine');
    }​​​
    console.log(id);
    this.service.deleteUser(id).subscribe(onSuccess, onError);
  }

  updateUser(index: number) {
    this.type = "Modifica";
    this.user = this.users[index];
    console.log(this.type);
  }

  getAllUsers() {
    const onsucces = (result:any)=>{
      console.log(result);
      this.users = result;
    }
    const onerror=()=>{
      console.log("Error: GetAllUsers()");
    }
    this.service.getAllUsers().subscribe(onsucces,onerror);
  }
}
