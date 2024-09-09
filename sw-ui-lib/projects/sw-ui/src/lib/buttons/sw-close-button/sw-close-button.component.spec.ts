import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCloseButtonComponent } from './sw-close-button.component';

describe('SwCloseButtonComponent', () => {
  let component: SwCloseButtonComponent;
  let fixture: ComponentFixture<SwCloseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwCloseButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwCloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
