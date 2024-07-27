import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwPrimaryButtonComponent } from './sw-primary-button.component';

describe('SwPrimaryButtonComponent', () => {
  let component: SwPrimaryButtonComponent;
  let fixture: ComponentFixture<SwPrimaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwPrimaryButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwPrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
