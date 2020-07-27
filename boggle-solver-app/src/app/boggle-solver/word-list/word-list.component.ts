import { Component, OnInit } from '@angular/core';
import {BoggleSolverService} from '../services/boggle-solver.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss']
})
export class WordListComponent implements OnInit {

  constructor(private _boggleSolverService: BoggleSolverService) {
  }

  get boggleSolverService(): BoggleSolverService {
    return this._boggleSolverService;
  }

  get wordList(): string[] {
    return this._boggleSolverService.wordList;
  }

  get isLoading(): boolean {
    return this.boggleSolverService.isLoading;
  }

  ngOnInit(): void {
  }

  resetWordList(): void {
    this._boggleSolverService.wordList = [];
  }

}
