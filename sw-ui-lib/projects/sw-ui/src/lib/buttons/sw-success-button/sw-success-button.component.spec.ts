import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSuccessButtonComponent } from './sw-success-button.component';

describe('SwSuccessButtonComponent', () => {
  let component: SwSuccessButtonComponent;
  let fixture: ComponentFixture<SwSuccessButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwSuccessButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwSuccessButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
