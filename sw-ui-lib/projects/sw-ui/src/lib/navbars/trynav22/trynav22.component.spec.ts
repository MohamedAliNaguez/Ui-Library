import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trynav22Component } from './trynav22.component';

describe('Trynav22Component', () => {
  let component: Trynav22Component;
  let fixture: ComponentFixture<Trynav22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trynav22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trynav22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
