import { Component, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/user';
import { AdminPanelService } from '../admin-panel.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users!: User[];

  activeTab = '';

  constructor(adminPanelService: AdminPanelService) { 
    this.activeTab = adminPanelService.getSelectTab();
  }

  ngOnChange(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit(): void {
  }
}
