import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwBasicModalComponentComponent } from './sw-basic-modal-component.component';

describe('SwBasicModalComponentComponent', () => {
  let component: SwBasicModalComponentComponent;
  let fixture: ComponentFixture<SwBasicModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwBasicModalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwBasicModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
