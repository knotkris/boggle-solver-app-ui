import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {WordListRespDto} from '../dto/word-list-resp-dto';

@Injectable({
  providedIn: 'root'
})
export class BoggleSolverRestService {

  private baseURL = environment.baseUrl;
  private solveRoute = environment.routes.solveBoard;

  constructor(private httpService: HttpClient) { }

  fetchWordList(params: HttpParams): Observable<WordListRespDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpService.get<WordListRespDto>(this.baseURL + this.solveRoute, {params, headers});
  }
}
