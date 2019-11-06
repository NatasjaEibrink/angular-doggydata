import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Litter} from '../domain/Litter';
import {map} from 'rxjs/operators';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RegisterLitterService {

  private litterUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.litterUrl = 'http://localhost:8080/litters';
  }

  public getLitters(): Observable<Litter[]> {
    return this.http.get<Litter[]>(this.litterUrl).pipe(
      map(litters => {
        litters.forEach(litter => {
          litter.pupsOfLitter.forEach(pup => {
            pup.formattedBirthDate = moment(pup.birthDate).format('YYYY-MM-DD');
          });
        })
        return litters;
      } )
    );
  }

  public registerLitter(litter: Litter): Observable<Litter> {
    const url = `${this.litterUrl}/add`;
    return this.http.post<Litter>(url, litter, this.httpOptions);
  }
}
