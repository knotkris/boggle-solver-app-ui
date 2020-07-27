import { TestBed } from '@angular/core/testing';

import { BoggleSolverRestService } from './boggle-solver-rest.service';

describe('BoggleSolverRestService', () => {
  let service: BoggleSolverRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoggleSolverRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
