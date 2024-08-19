import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwAlertBoxComponentComponent } from './sw-alert-box-component.component';

describe('SwAlertBoxComponentComponent', () => {
  let component: SwAlertBoxComponentComponent;
  let fixture: ComponentFixture<SwAlertBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwAlertBoxComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwAlertBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
