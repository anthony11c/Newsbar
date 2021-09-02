import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitikaComponent } from './politika.component';

describe('PolitikaComponent', () => {
  let component: PolitikaComponent;
  let fixture: ComponentFixture<PolitikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolitikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
