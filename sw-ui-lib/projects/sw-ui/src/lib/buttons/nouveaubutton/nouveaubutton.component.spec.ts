import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaubuttonComponent } from './nouveaubutton.component';

describe('NouveaubuttonComponent', () => {
  let component: NouveaubuttonComponent;
  let fixture: ComponentFixture<NouveaubuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveaubuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveaubuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
