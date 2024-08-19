import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwInputFieldComponentComponent } from './sw-input-field-component.component';

describe('SwInputFieldComponentComponent', () => {
  let component: SwInputFieldComponentComponent;
  let fixture: ComponentFixture<SwInputFieldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwInputFieldComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwInputFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
