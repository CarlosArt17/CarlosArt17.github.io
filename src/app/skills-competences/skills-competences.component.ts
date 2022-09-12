import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-competences',
  templateUrl: './skills-competences.component.html',
  styleUrls: ['./skills-competences.component.css']
})
export class SkillsCompetencesComponent implements OnInit {

  skillsCompetences : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let skill1 = {
      Nom_skill : "Trabajo en equipo",
      Des_skill : [
        {Descripccion : "[♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡]"}
      ]
    };

    let skill2 = {
      Nom_skill : "Trabajo en solitario",
      Des_skill : [
        {Descripccion : "[♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡]"}
      ]
    };

    let skill3 = {
      Nom_skill : "Python",
      Des_skill : [
        {Descripccion : "[♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡]"}
      ]
    };
    let skill4 = {
      Nom_skill : "C++",
      Des_skill : [
        {Descripccion : "[♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡]"}
      ]
    };

    this.skillsCompetences.push(skill1)
    
  }

}
