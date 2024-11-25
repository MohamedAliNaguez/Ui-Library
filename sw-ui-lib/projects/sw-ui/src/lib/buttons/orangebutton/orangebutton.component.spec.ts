import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangebuttonComponent } from './orangebutton.component';

describe('OrangebuttonComponent', () => {
  let component: OrangebuttonComponent;
  let fixture: ComponentFixture<OrangebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrangebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
