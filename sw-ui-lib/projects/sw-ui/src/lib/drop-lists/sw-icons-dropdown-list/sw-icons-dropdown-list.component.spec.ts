import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwIconsDropdownListComponent } from './sw-icons-dropdown-list.component';

describe('SwIconsDropdownListComponent', () => {
  let component: SwIconsDropdownListComponent;
  let fixture: ComponentFixture<SwIconsDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwIconsDropdownListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwIconsDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
