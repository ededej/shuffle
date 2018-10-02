import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {Furnitures } from '../model/Furnitures';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  shuffle: string;


  constructor( private http: Http, private client: HttpClient) {
    this.shuffle = environment.shuffle;
  }

  getAll(): Observable<Furnitures> {
    return this.client.get<Furnitures>('assets/sampleSearch.json');
  }

}
