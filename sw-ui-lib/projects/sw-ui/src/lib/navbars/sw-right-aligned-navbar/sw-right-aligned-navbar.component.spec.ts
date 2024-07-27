import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwRightAlignedNavbarComponent } from './sw-right-aligned-navbar.component';

describe('SwRightAlignedNavbarComponent', () => {
  let component: SwRightAlignedNavbarComponent;
  let fixture: ComponentFixture<SwRightAlignedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwRightAlignedNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwRightAlignedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
