import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoliciteCardComponent } from './solicite-card.component';

describe('SoliciteCardComponent', () => {
  let component: SoliciteCardComponent;
  let fixture: ComponentFixture<SoliciteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoliciteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliciteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
