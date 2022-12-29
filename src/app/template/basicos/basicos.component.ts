import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.value.producto?.length < 3 &&
      !this.miFormulario?.pristine
  }

  precioValido(): boolean {
    return this.miFormulario?.value.precio < 1 &&
      !this.miFormulario?.pristine
  }

  // guardar(miFormulario: NgForm)
  guardar() {
    // console.log(this.miFormulario);
    console.log('Posteo Correcto');


    this.miFormulario.resetForm();

  }

}
