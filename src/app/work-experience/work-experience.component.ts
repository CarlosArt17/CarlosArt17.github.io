import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {


  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
     let work1 = {
      fecha : "2002-2005",
      ubicacion : "Orizaba, Ver",
      puesto : "Estudiante de preescolar",
      empresa : "Patitos",
      logros : [
        {descripcion : "Graduado con honores"}, 
        {descripcion : "El mejor de la clase"},
      ]
    };
     let work2 = {
      fecha : "2005-2010",
      ubicacion : "Rio Blanco, Ver",
      puesto : "Estudiante de kinder",
      empresa : "Hellenkeller",
      logros : [
        {descripcion : "Graduado con honores"}, 
        {descripcion : "El mejor de la clase"},
        {descripcion : "Muy participativo"}
      ]
     };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }

}
