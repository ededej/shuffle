import { Component, OnInit } from '@angular/core';
import {MyMaterialModuleModule} from '../shared/lib/my-material-module/my-material-module.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
