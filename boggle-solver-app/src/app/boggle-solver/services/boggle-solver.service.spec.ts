import { TestBed } from '@angular/core/testing';

import { BoggleSolverService } from './boggle-solver.service';

describe('BoggleSolverService', () => {
  let service: BoggleSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoggleSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
