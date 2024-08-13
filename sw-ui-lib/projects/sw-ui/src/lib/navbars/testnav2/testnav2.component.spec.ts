import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testnav2Component } from './testnav2.component';

describe('Testnav2Component', () => {
  let component: Testnav2Component;
  let fixture: ComponentFixture<Testnav2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testnav2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testnav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
