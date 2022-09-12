import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsCompetencesComponent } from './skills-competences/skills-competences.component';
import { AchievementsCertificadesComponent } from './achievements-certificades/achievements-certificades.component';
import { LenguaguesComponent } from './lenguagues/lenguagues.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    SkillsCompetencesComponent,
    AchievementsCertificadesComponent,
    LenguaguesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
