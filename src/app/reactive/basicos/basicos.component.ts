import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5)
  // })

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) { }

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls['nombre'].touched
  }


}
