import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSecondaryButtonComponent } from './sw-secondary-button.component';

describe('SwSecondaryButtonComponent', () => {
  let component: SwSecondaryButtonComponent;
  let fixture: ComponentFixture<SwSecondaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwSecondaryButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwSecondaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
