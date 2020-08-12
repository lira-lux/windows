import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRotoComponent } from './about-roto.component';

describe('AboutRotoComponent', () => {
  let component: AboutRotoComponent;
  let fixture: ComponentFixture<AboutRotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
