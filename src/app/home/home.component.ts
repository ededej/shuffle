import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tableCheck = false;
  chairCheck = false;
  tentsCheck = false;

  constructor() {

   }

  ngOnInit() {

  }

  filterTable(event) {
    this.tableCheck = event.checked;
  }
  removeFilters() {
    this.tableCheck = false;
    this.chairCheck = false;
    this.tentsCheck = false;
  }
}
