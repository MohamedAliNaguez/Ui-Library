import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybuttComponent } from './trybutt.component';

describe('TrybuttComponent', () => {
  let component: TrybuttComponent;
  let fixture: ComponentFixture<TrybuttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrybuttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrybuttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
