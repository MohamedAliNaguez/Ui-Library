import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowbuttonComponent } from './yellowbutton.component';

describe('YellowbuttonComponent', () => {
  let component: YellowbuttonComponent;
  let fixture: ComponentFixture<YellowbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
