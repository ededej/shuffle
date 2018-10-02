import { Component, OnInit, Input, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { ServiceService } from './service/service.service';

import { MyMaterialModuleModule } from '../../shared/lib/my-material-module/my-material-module.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges {
  private jsonData;
  private shuffleList;

  @Input() tableFilter = false;
  @Input() chairFilter = false;
  @Input() tentsFilter = false;


  constructor(private service: ServiceService) { }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (this.jsonData) {
      this.filter(this.tableFilter, this.chairFilter, this.tentsFilter);
    }
  }

  performSearch(searchInput: HTMLInputElement): void {
    this.service.getAll()
      .subscribe(
        data => {
          this.jsonData = data;
          this.filter(this.tableFilter, this.chairFilter, this.tentsFilter);
        },
        error => {
          console.log(error);
        });
  }

  filter(tableCheck: boolean, chairCheck: boolean, tentsCheck: boolean) {
    if (tableCheck && chairCheck && tentsCheck) {
      this.shuffleList = this.jsonData;
    } else if (tableCheck && chairCheck) {
      this.shuffleList = this.jsonData.filter(item => item.category === 'Table' || item.category === 'Chair');
    } else if (tableCheck && tentsCheck) {
      this.shuffleList = this.jsonData.filter(item => item.category === 'Table' || item.category === 'Tents');
    } else if (chairCheck && tentsCheck) {
      this.shuffleList = this.jsonData.filter(item => item.category === 'Chair' || item.category === 'Tents');
    } else if (tableCheck) {
      this.shuffleList = this.jsonData.filter(item => item.category === 'Table');
    } else if (chairCheck) {
      this.shuffleList = this.jsonData.filter(item => item.category === 'Chair');
    } else if (tentsCheck) {
      this.shuffleList = this.jsonData.filter(item => item.category === 'Tents');
    } else {
      this.shuffleList = this.jsonData;
    }
  }
}
