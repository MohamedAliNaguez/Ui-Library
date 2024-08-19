import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbutoutntttComponent } from './newbutoutnttt.component';

describe('NewbutoutntttComponent', () => {
  let component: NewbutoutntttComponent;
  let fixture: ComponentFixture<NewbutoutntttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbutoutntttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbutoutntttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
