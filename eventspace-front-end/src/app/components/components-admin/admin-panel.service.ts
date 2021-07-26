import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  activeTab = 'list_event';

  constructor(private _router: Router) { }

  changeSelect(newTab: string) : void {
    this.activeTab = newTab;
    console.log(this.activeTab);
    location.reload();
  }

  getSelectTab() : string {
    return this.activeTab;
  }


}
