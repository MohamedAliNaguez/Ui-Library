import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButsspeecccComponent } from './butsspeeccc.component';

describe('ButsspeecccComponent', () => {
  let component: ButsspeecccComponent;
  let fixture: ComponentFixture<ButsspeecccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButsspeecccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButsspeecccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
