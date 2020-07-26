import { Injectable } from '@angular/core';
import {BoggleSolverRestService} from './boggle-solver-rest.service';
import {HttpParams} from '@angular/common/http';
import {catchError, timeout} from 'rxjs/operators';
import {FormArray, FormControl, Validators} from "@angular/forms";
import {Constants} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class BoggleSolverService {

  wordList: string[] = [];
  boggleBoard: FormArray;
  boardSize = 4; // w x h dimensions for boggle board

  isLoading = false;

  constructor(private boggleSolverRestService: BoggleSolverRestService) { }

  fetchWordList(): void {
    this.isLoading = true;
    const board: string[] = this.boggleBoard.controls.map(form => form.value as string);
    this.wordList = ['cats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats', 'ats'];
    const httpParams = new HttpParams().set('boggle-board', board.toString());
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

  initFormArray(): void {
    this.boggleBoard = new FormArray([]);
    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      this.boggleBoard.insert(i, new FormControl(Constants.DEFAULT_BOGGLE_PIECE, [Validators.required, Validators.pattern('[A-Za-z]')]));
    }
  }

  resetBoard(): void {
    this.initFormArray();
  }

  resetWordList(): void {
    this.wordList = [];
  }
}
