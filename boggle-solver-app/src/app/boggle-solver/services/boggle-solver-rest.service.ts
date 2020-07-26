import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
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

  fetchWordList(httpParam: HttpParams): Observable<WordListRespDto> {
    return this.httpService.get<WordListRespDto>(this.baseURL + this.solveRoute, {params: httpParam});
  }
}
