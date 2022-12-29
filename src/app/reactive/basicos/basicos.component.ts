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
    nombre: ['RTX 4080ti', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.min(0), Validators.required]],
    existencias: [0, [Validators.min(0), Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) { }


}
