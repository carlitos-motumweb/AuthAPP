import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(formulario: NgForm) {
    console.log('Se debe realizar el guardado');
    console.log(formulario)
  }

}
