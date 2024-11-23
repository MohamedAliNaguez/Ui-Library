import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplebuttonComponent } from './purplebutton.component';

describe('PurplebuttonComponent', () => {
  let component: PurplebuttonComponent;
  let fixture: ComponentFixture<PurplebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurplebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurplebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
