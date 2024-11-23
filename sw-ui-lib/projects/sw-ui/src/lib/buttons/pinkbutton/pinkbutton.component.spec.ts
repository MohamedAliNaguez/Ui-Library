import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkbuttonComponent } from './pinkbutton.component';

describe('PinkbuttonComponent', () => {
  let component: PinkbuttonComponent;
  let fixture: ComponentFixture<PinkbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinkbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinkbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
