import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrynavComponent } from './trynav.component';

describe('TrynavComponent', () => {
  let component: TrynavComponent;
  let fixture: ComponentFixture<TrynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
