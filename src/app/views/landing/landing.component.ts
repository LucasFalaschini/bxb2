import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

declare const Swal:any;

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls:["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}



  
  consulta(form?: NgForm) {
    Swal.fire({
      title: 'Consulta rápida via WhatsApp',
      icon: 'info',
      text: '¿Desea contactarse con nosotros para obtener más información?',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      cancelButtonText:
      'Quizas en otro momento',
      cancelButtonAriaLabel: 'Thumbs down',
      confirmButtonText:
      '<a class="text-white" href="https://api.whatsapp.com/send?phone=+5492235216323&text=Hola!%0d%0aMe+gustaria+hacer+una+consulta+acerca+de+sus+productos+y+servicios!">De acuerdo</a>',
      confirmButtonAriaLabel: 'Thumbs up, great!'
    });
  }
}
