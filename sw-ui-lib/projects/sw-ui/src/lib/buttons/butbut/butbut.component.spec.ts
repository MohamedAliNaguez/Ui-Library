import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButbutComponent } from './butbut.component';

describe('ButbutComponent', () => {
  let component: ButbutComponent;
  let fixture: ComponentFixture<ButbutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButbutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButbutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
