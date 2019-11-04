import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Litter} from '../domain/Litter';

@Injectable({
  providedIn: 'root'
})
export class RegisterLitterService {

  private litterUrl: string;

  constructor(private http: HttpClient) {
    this.litterUrl = 'http://localhost:8080/litters';
  }

  public getLitters(): Observable<Litter[]> {
    return this.http.get<Litter[]>(this.litterUrl);
  }

  public registerLitter(litter: Litter): Observable<Litter> {
    const url = `${this.litterUrl}/add`;
    return this.http.post<Litter>(url, litter);
  }
}
