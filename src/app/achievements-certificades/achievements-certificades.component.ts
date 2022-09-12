import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements-certificades',
  templateUrl: './achievements-certificades.component.html',
  styleUrls: ['./achievements-certificades.component.css']
})
export class AchievementsCertificadesComponent implements OnInit {

  certificado : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let cert1 = {
      Nom_cert : "Certificado del uso de la paqueteria de Microsoft",
      fecha : "2018",
      Des_cert : [
        {Descripccion : "Mediante un examen de competencias de la paqueteria de Microsoft fue entregado este diploma"}
      ]
    };

    let cert2 = {
      Nom_cert : "Certificado de alumno estrella",
      fecha : "2015",
      Des_cert : [
        {Descripccion : "Otorgado al mejor alumno de la clase"}
      ]  
    }
  this.certificado.push(cert1);
  this.certificado.push(cert2)
  }
}
