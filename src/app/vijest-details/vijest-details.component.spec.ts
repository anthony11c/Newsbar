import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VijestDetailsComponent } from './vijest-details.component';

describe('VijestDetailsComponent', () => {
  let component: VijestDetailsComponent;
  let fixture: ComponentFixture<VijestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VijestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VijestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
