import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnOtherButtonComponent } from './an-other-button.component';

describe('AnOtherButtonComponent', () => {
  let component: AnOtherButtonComponent;
  let fixture: ComponentFixture<AnOtherButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnOtherButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnOtherButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
