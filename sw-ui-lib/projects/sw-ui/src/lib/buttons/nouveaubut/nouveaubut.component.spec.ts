import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaubutComponent } from './nouveaubut.component';

describe('NouveaubutComponent', () => {
  let component: NouveaubutComponent;
  let fixture: ComponentFixture<NouveaubutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveaubutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveaubutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
