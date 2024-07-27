import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwStyledDropdownListComponent } from './sw-styled-dropdown-list.component';

describe('SwStyledDropdownListComponent', () => {
  let component: SwStyledDropdownListComponent;
  let fixture: ComponentFixture<SwStyledDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwStyledDropdownListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwStyledDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
