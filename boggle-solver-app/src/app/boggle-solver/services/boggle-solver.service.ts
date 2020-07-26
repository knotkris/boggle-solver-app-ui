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
  boardSize = Constants.DEFAULT_BOARD_SIZE; // w x h dimensions for boggle board

  isLoading = false;

  constructor(private boggleSolverRestService: BoggleSolverRestService) { }

  fetchWordList(): void {
    this.isLoading = true;
    const board: string[] = this.boggleBoard.controls.map(form => form.value as string);

    const httpParams = new HttpParams()
      .set('board', board.toString())
      .set('size', this.boardSize.toString());

    this.boggleSolverRestService.fetchWordList(httpParams).pipe(timeout(Constants.DEFAULT_TIMEOUT)).subscribe(
      resp => {
        this.isLoading = false;
        if (resp.data) {
          this.wordList = resp.data;
        }
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  initFormArray(): void {
    this.boggleBoard = new FormArray([]);
    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      this.boggleBoard.insert(i, new FormControl(Constants.DEFAULT_BOGGLE_PIECE, [Validators.required, Validators.pattern(Constants.ALPHA_REG_EX)]));
    }
  }

  resetBoard(): void {
    this.initFormArray();
  }

  resetWordList(): void {
    this.wordList = [];
  }
}
