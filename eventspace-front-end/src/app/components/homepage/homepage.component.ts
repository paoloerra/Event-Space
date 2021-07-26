import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
  
})
export class HomepageComponent implements OnInit {

  categoria!: string;

  constructor() {
  }

  changeCategory(categoria: string) {
    this.categoria = categoria;
  }

   ngOnInit(): void {
  }

}
