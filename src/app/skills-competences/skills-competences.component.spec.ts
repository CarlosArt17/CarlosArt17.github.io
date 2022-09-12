import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCompetencesComponent } from './skills-competences.component';

describe('SkillsCompetencesComponent', () => {
  let component: SkillsCompetencesComponent;
  let fixture: ComponentFixture<SkillsCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
