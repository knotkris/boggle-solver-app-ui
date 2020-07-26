import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoggleSolverRestService {

  constructor(private httpService: HttpClient) { }

  fetchWordList(httpParam: HttpParams): Observable<string[]> {
    return this.httpService.get<string[]>('localhost:8084/boggle-solver/solve', {params: httpParam});
  }
}
