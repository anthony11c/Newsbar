import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZnanostComponent } from './znanost.component';

describe('ZnanostComponent', () => {
  let component: ZnanostComponent;
  let fixture: ComponentFixture<ZnanostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZnanostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZnanostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
