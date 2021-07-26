import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ListUserService } from './list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users!: User[];

  constructor(private service: ListUserService) {
    this.getAllUsers();
  }

  ngOnInit(): void {
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
