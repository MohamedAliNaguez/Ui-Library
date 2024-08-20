import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuveaubutton1Component } from './nuveaubutton1.component';

describe('Nuveaubutton1Component', () => {
  let component: Nuveaubutton1Component;
  let fixture: ComponentFixture<Nuveaubutton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nuveaubutton1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nuveaubutton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
