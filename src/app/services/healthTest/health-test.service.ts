import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HealthTest} from '../../domain/HealthTest';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Dog} from '../../domain/Dog';

@Injectable({
  providedIn: 'root'
})
export class HealthTestService {

  private healthTestUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'})
  };

  constructor(private http: HttpClient) {
    this.healthTestUrl = 'http://localhost:8080/gezondheidstesten';
  }

  getDogHealthTestResults(id: ['id']): Observable<HealthTest[]> {
    return this.http.get<HealthTest[]>(`${this.healthTestUrl}/${id}`);
  }

  public registerHealthTest(id: ['id'], healthTest: {heupen:string, ogen: string, patella: string, dateOfExamination: Date}): Observable<HealthTest> {
    const url = `${this.healthTestUrl}/${id}`;
    return this.http.post<HealthTest>(url, healthTest, this.httpOptions);
  }
}
