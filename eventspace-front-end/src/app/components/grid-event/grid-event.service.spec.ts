import { TestBed } from '@angular/core/testing';

import { GridEventService } from './grid-event.service';

describe('GridEventService', () => {
  let service: GridEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
