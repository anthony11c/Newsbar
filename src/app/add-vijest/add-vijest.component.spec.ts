import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVijestComponent } from './add-vijest.component';

describe('AddVijestComponent', () => {
  let component: AddVijestComponent;
  let fixture: ComponentFixture<AddVijestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVijestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVijestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
