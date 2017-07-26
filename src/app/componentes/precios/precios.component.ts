import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  formulario: FormGroup;

  usuario: Object = {
      nombreCompleto: {
          nombre: 'Carlos Augustin',
          apellidos: 'Flores Valerio'
      },
      email: 'carlosflores@motumweb.com'
  }

  constructor() {
    this.formulario = new FormGroup({
      'nombreCompleto': new FormGroup({
          'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
          'apellidos': new FormControl('', [Validators.required, this.apellidosInvalidos])
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
          new FormControl('jugar basquetball', Validators.required)
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl(''),
      'usuario': new FormControl('', Validators.required, this.existeUsuario)
    });
    // this.formulario.setValue(this.usuario);
    this.formulario.controls['password2'].setValidators([Validators.required, this.compararPassword.bind(this.formulario)]);
  }
  ngOnInit() {
  }

  guardarCambios() {
    console.log('Se deben guardar los cambios', this.formulario);
    // this.formulario.reset();
  }

  agregarPasatiempo() {
      console.log('Se debe de agregar un pasatiempo');
      (<FormArray>this.formulario.controls['pasatiempos']).push(new FormControl('', Validators.required));

  }

  eliminarPasatiempo() {
      console.log('Se debe de eliminar un pasatiempo');
      (<FormArray>this.formulario.controls['pasatiempos']).removeAt((<FormArray>this.formulario.controls['pasatiempos']).length - 1);

  }

  apellidosInvalidos(control: FormControl): {[s: string]: boolean} {
      if (control.value === 'flores' || control.value === 'valerio') {
            return {
                apellidosInvalidos: true
            }
      } else {
          return  null;
      }
  }

  compararPassword(control: FormControl): {[s: string]: boolean} {
      const formTEMP: any = this;
      if (control.value !== formTEMP.controls['password1'].value) {
            return {
                compararPassword: true
            }
      } else {
          return  null;
      }
  }


  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
      const promesa = new Promise(
          (resolve, reject) => {
              setTimeout( () => {
                  if (control.value === 'carlitos') {
                      resolve({existe: true});
                  } else {
                      resolve(null);
                  }
              }, 3000)
          }
      );
      return promesa;
  }

}
