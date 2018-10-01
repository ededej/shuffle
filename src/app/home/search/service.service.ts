import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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
 
  getAll(){
    console.log("Making the request from service to: " + this.shuffle );
    
    return this.client.get('assets/sampleSearch.json');

  }

  shuffleArray (array){
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
}
