import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSelectDropdownComponentComponent } from './sw-select-dropdown-component.component';

describe('SwSelectDropdownComponentComponent', () => {
  let component: SwSelectDropdownComponentComponent;
  let fixture: ComponentFixture<SwSelectDropdownComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwSelectDropdownComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwSelectDropdownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
