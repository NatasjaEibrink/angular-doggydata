import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dog} from '../../domain/Dog';
import {map} from 'rxjs/operators';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DogDetailsService {

  private dogDetailsUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.dogDetailsUrl = 'http://localhost:8080/dogs/'
  }

  getDogDetails(id: Dog['id']): Observable<Dog>{
    return this.http.get<Dog>(this.dogDetailsUrl+id).pipe(
      map(dog => {
        dog.formattedBirthDate = moment(dog.birthDate).format('YYYY-MM-DD')
        return dog;
      })
    );
  }
}
