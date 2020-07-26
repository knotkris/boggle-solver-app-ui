import { Injectable } from '@angular/core';
import {BoggleSolverRestService} from './boggle-solver-rest.service';
import {HttpParams} from '@angular/common/http';
import {catchError, timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoggleSolverService {

  wordList: string[] = [];
  boggleBoard: string[] = [];
  boardSize = 4; // w x h dimensions for boggle board

  isLoading = false;

  constructor(private boggleSolverRestService: BoggleSolverRestService) { }

  fetchWordList(): void {
    this.isLoading = true;
    this.wordList = ['cats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats'];
    const httpParams = new HttpParams().set('boggle-board', this.boggleBoard.toString());
    // todo add timeouts and map data for errors
    /*this.boggleSolverRestService.fetchWordList(httpParams).pipe(timeout(1000)).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );*/
  }

  resetBoard(): void {
    this.boggleBoard = [];
  }

  resetWordList(): void {
    this.wordList = [];
  }
}
