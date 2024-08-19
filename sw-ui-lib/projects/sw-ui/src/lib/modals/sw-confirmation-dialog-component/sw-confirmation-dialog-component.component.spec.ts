import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwConfirmationDialogComponentComponent } from './sw-confirmation-dialog-component.component';

describe('SwConfirmationDialogComponentComponent', () => {
  let component: SwConfirmationDialogComponentComponent;
  let fixture: ComponentFixture<SwConfirmationDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwConfirmationDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwConfirmationDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
