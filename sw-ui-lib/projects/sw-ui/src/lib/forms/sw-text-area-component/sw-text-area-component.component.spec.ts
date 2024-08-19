import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwTextAreaComponentComponent } from './sw-text-area-component.component';

describe('SwTextAreaComponentComponent', () => {
  let component: SwTextAreaComponentComponent;
  let fixture: ComponentFixture<SwTextAreaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwTextAreaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwTextAreaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
