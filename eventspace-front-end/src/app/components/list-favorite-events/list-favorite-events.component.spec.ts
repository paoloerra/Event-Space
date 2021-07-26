import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoriteEventsComponent } from './list-favorite-events.component';

describe('ListFavoriteEventsComponent', () => {
  let component: ListFavoriteEventsComponent;
  let fixture: ComponentFixture<ListFavoriteEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavoriteEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFavoriteEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
