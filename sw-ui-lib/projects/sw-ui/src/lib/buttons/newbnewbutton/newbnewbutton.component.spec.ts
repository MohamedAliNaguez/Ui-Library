import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbnewbuttonComponent } from './newbnewbutton.component';

describe('NewbnewbuttonComponent', () => {
  let component: NewbnewbuttonComponent;
  let fixture: ComponentFixture<NewbnewbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbnewbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbnewbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
