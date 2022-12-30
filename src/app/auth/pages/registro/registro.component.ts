import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //TODO: Temporal

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }

  submitFormulario() {

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

  }

}
