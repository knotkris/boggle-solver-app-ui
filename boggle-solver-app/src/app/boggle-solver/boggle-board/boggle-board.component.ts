import { Component, OnInit } from '@angular/core';
import {BoggleSolverService} from '../services/boggle-solver.service';
import {FormArray, FormControl, Validators} from '@angular/forms';
import {Constants} from '../../constants';

@Component({
  selector: 'app-boggle-board',
  templateUrl: './boggle-board.component.html',
  styleUrls: ['./boggle-board.component.scss']
})
export class BoggleBoardComponent implements OnInit {

  constructor(private boggleSolverService: BoggleSolverService) { }

  ngOnInit(): void {
    this.initFormArray();
  }

  get board(): FormArray {
    return this.boggleSolverService.boggleBoard;
  }

  get isLoading(): boolean {
    return this.boggleSolverService.isLoading;
  }

  get isValid(): boolean {
    return this.board.valid;
  }

  get rows(): Array<number> { // returns an array of the row start of the array given the boggle board size
    return Array(this.boardSize).fill(0).map((_, i) => i * this.boardSize);
  }

  get boardSize(): number {
    return this.boggleSolverService.boardSize;
  }

  get validationMessages(): any {
    return Constants.VALIDATION_MSGS;
  }

  initFormArray(): void {
    this.boggleSolverService.initFormArray();
  }

  resetBoard(): void {
    this.boggleSolverService.resetBoard();
    this.boggleSolverService.resetWordList();
  }

  findWords(): void {
    this.boggleSolverService.fetchWordList();
  }

  setLoading(): void {
    this.boggleSolverService.isLoading = false;
  }
}
