import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWindowComponent } from './cards-window.component';

describe('CardsWindowComponent', () => {
  let component: CardsWindowComponent;
  let fixture: ComponentFixture<CardsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
