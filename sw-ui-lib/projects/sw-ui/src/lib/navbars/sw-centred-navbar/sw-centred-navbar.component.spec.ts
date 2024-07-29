import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCentredNavbarComponent } from './sw-centred-navbar.component';

describe('SwCentredNavbarComponent', () => {
  let component: SwCentredNavbarComponent;
  let fixture: ComponentFixture<SwCentredNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwCentredNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwCentredNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
