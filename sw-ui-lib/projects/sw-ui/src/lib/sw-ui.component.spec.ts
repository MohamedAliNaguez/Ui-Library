import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwUiComponent } from './sw-ui.component';

describe('SwUiComponent', () => {
  let component: SwUiComponent;
  let fixture: ComponentFixture<SwUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
