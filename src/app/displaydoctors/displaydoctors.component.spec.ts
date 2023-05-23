import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydoctorsComponent } from './displaydoctors.component';

describe('DisplaydoctorsComponent', () => {
  let component: DisplaydoctorsComponent;
  let fixture: ComponentFixture<DisplaydoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaydoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
