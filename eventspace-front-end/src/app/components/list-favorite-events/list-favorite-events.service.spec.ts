import { TestBed } from '@angular/core/testing';

import { ListFavoriteEventsService } from './list-favorite-events.service';

describe('ListFavoriteEventsService', () => {
  let service: ListFavoriteEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFavoriteEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
