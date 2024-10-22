import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSWBUttonComponent } from './new-swbutton.component';

describe('NewSWBUttonComponent', () => {
  let component: NewSWBUttonComponent;
  let fixture: ComponentFixture<NewSWBUttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSWBUttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSWBUttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
