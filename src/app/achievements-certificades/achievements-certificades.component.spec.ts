import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsCertificadesComponent } from './achievements-certificades.component';

describe('AchievementsCertificadesComponent', () => {
  let component: AchievementsCertificadesComponent;
  let fixture: ComponentFixture<AchievementsCertificadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsCertificadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsCertificadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
