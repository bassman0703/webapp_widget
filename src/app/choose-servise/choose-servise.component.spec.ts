import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseServiseComponent } from './choose-servise.component';

describe('ChooseServiseComponent', () => {
  let component: ChooseServiseComponent;
  let fixture: ComponentFixture<ChooseServiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseServiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseServiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
