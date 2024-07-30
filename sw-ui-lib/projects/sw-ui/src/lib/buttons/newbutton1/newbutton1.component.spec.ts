import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newbutton1Component } from './newbutton1.component';

describe('Newbutton1Component', () => {
  let component: Newbutton1Component;
  let fixture: ComponentFixture<Newbutton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newbutton1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newbutton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
