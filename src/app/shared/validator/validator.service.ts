import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  constructor() { }

  noPuedeSerStrider(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true
      }
    }

    return null;

  }

  camposIguales(campo1: string, campo2: string) {

    return (formgroup: AbstractControl): ValidationErrors | null => {

      const password = formgroup.get(campo1)?.value;
      const password2 = formgroup.get(campo2)?.value;

      if (password !== password2) {
        formgroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }

      formgroup.get(campo2)?.setErrors(null);

      return null;
    };


  }

}
