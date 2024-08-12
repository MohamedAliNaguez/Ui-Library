import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwButComponent } from './sw-but.component';

describe('SwButComponent', () => {
  let component: SwButComponent;
  let fixture: ComponentFixture<SwButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwButComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
