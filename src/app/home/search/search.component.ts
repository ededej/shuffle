import { Component, OnInit, Input, OnChanges, SimpleChange, OnDestroy  } from '@angular/core';
import {ServiceService} from './service.service';

import {MyMaterialModuleModule} from '../../shared/lib/my-material-module/my-material-module.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges{
  jsonData;
  jsonDataDispaly;
  private eventsSubscription: any;

  @Input() tableFilter = false;
  @Input() chairFilter = false;
  @Input() tentsFilter = false;


  constructor(private service: ServiceService) { }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log("Table: " + this.tableFilter);
    console.log("Chair: " + this.chairFilter);
    console.log("Tents: " + this.tentsFilter);
    if(this.jsonData ){
    this.filter(this.tableFilter, this.chairFilter, this.tentsFilter);
    }
  }

  performSearch(searchInput:  HTMLInputElement): void {
    console.log("searched performed: " + searchInput.value);
    this.service.getAll()
    .subscribe(
      data => {
        console.log(data);
        this.jsonData = data;
        this.jsonDataDispaly = this.service.shuffleArray(data);
        this.filter(this.tableFilter, this.chairFilter, this.tentsFilter);

      },
      error => {
        console.log("Error getting the menu: " + error);
    });
   }

   filter (tableCheck: boolean, chairCheck: boolean, tentsCheck: boolean) {
    if (tableCheck && chairCheck) {
      this.jsonDataDispaly = this.jsonData.filter(item => item.category === 'Table' || item.category === 'Chair');
    } else if (tableCheck && tentsCheck) {
      this.jsonDataDispaly = this.jsonData.filter(item => item.category === 'Table' || item.category === 'Tents');
    } else if (chairCheck && tentsCheck) {
      this.jsonDataDispaly = this.jsonData.filter(item => item.category === 'Chair' || item.category === 'Tents');
    } else if (tableCheck) {
      this.jsonDataDispaly = this.jsonData.filter(item => item.category === 'Table');
    } else if (chairCheck) {
      this.jsonDataDispaly = this.jsonData.filter(item => item.category === 'Chair');
    } else if (tentsCheck) {
      this.jsonDataDispaly = this.jsonData.filter(item => item.category === 'Tents');
    } else {
      this.jsonDataDispaly = this.jsonData;
    }
   }
}
