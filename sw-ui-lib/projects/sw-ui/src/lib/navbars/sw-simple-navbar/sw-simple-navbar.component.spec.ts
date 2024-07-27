import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSimpleNavbarComponent } from './sw-simple-navbar.component';

describe('SwSimpleNavbarComponent', () => {
  let component: SwSimpleNavbarComponent;
  let fixture: ComponentFixture<SwSimpleNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwSimpleNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwSimpleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
