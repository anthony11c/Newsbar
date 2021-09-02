import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanakComponent } from './clanak.component';

describe('ClanakComponent', () => {
  let component: ClanakComponent;
  let fixture: ComponentFixture<ClanakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
