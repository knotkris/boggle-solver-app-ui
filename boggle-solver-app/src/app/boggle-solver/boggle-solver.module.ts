import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoggleBoardComponent } from './boggle-board/boggle-board.component';
import { WordListComponent } from './word-list/word-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [BoggleBoardComponent, WordListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [BoggleBoardComponent, WordListComponent]
})
export class BoggleSolverModule { }
