import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HealthTest} from '../../domain/HealthTest';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PuppyData} from '../../domain/PuppyData';
import {Litter} from '../../domain/Litter';

@Injectable({
  providedIn: 'root'
})
export class PuppyDataService {

  private puppyDataUrl: string

  private puppyGraphUrl = "http://localhost:8080/puppygroei/graph";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'})
  };

  constructor(private http: HttpClient) {
    this.puppyDataUrl = "http://localhost:8080/puppygroei/register"
  }

  public getPuppyData(): Observable<{[key: number]:PuppyData[]}> {
    return this.http.get<{[key: number]:PuppyData[]}>(this.puppyGraphUrl);
  }


  public registerPuppyWeight(id: ['id'], puppyData: {weekNumber: number, weight: number}): Observable<PuppyData> {
    const url = `${this.puppyDataUrl}/${id}`;
    return this.http.post<PuppyData>(url, puppyData, this.httpOptions);
  }
}
