import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguaguesComponent } from './lenguagues.component';

describe('LenguaguesComponent', () => {
  let component: LenguaguesComponent;
  let fixture: ComponentFixture<LenguaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguaguesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
