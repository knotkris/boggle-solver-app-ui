import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoggleBoardComponent } from './boggle-board.component';

describe('BoggleBoardComponent', () => {
  let component: BoggleBoardComponent;
  let fixture: ComponentFixture<BoggleBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoggleBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoggleBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
