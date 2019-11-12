import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HealthTest} from '../../domain/HealthTest';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PuppyData} from '../../domain/PuppyData';

@Injectable({
  providedIn: 'root'
})
export class PuppyDataService {

  private puppyDataUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'})
  };

  constructor(private http: HttpClient) {
    this.puppyDataUrl = "http://localhost:8080/puppygroei/register"
  }


  public registerPuppyWeight(id: ['id'], puppyData: {weekNumber: number, weight: number}): Observable<PuppyData> {
    const url = `${this.puppyDataUrl}/${id}`;
    return this.http.post<PuppyData>(url, puppyData, this.httpOptions);
  }
}
