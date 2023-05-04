import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypatientsComponent } from './displaypatients.component';

describe('DisplaypatientsComponent', () => {
  let component: DisplaypatientsComponent;
  let fixture: ComponentFixture<DisplaypatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaypatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaypatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
