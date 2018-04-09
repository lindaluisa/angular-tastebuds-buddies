import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesDetailComponent } from './dishes-detail.component';

describe('DishesDetailComponent', () => {
  let component: DishesDetailComponent;
  let fixture: ComponentFixture<DishesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
