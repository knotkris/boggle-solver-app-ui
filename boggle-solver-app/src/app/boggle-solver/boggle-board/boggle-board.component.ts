import { Component, OnInit } from '@angular/core';
import {BoggleSolverService} from "../services/boggle-solver.service";
import {FormArray, FormControl, Validators} from "@angular/forms";
import {Constants} from "../../constants";

@Component({
  selector: 'app-boggle-board',
  templateUrl: './boggle-board.component.html',
  styleUrls: ['./boggle-board.component.scss']
})
export class BoggleBoardComponent implements OnInit {

  boardForm: FormArray;

  constructor(private boggleSolverService: BoggleSolverService) { }

  ngOnInit(): void {
    this.initFormArray();
  }

  get board(): string[] {
    return this.boggleSolverService.boggleBoard;
  }

  get isLoading(): boolean {
    return this.boggleSolverService.isLoading;
  }

  get isValid(): boolean {
    return this.boardForm.valid;
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
    this.boardForm = new FormArray([]);
    for (let i = 0; i < this.boggleSolverService.boardSize * this.boggleSolverService.boardSize; i++) {
      this.boardForm.insert(i, new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]')]));
    }
  }

  resetBoard(): void {
    this.initFormArray();
    this.boggleSolverService.wordList = [];
  }

  findWords(): void {
    this.boggleSolverService.fetchWordList();
  }

  setLoading(): void {
    this.boggleSolverService.isLoading = false;
  }
}
