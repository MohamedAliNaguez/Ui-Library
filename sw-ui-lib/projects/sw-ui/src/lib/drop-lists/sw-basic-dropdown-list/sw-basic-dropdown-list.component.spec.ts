import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwBasicDropdownListComponent } from './sw-basic-dropdown-list.component';

describe('SwBasicDropdownListComponent', () => {
  let component: SwBasicDropdownListComponent;
  let fixture: ComponentFixture<SwBasicDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwBasicDropdownListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwBasicDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
