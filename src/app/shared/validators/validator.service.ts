import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public nameLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  
  dontBeGatunosh(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'gatunosh') {
      return {
        noGatunosh: true
      }
    }

    return null;
  }

  equalFields(mainField:string, secondField: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const password1 = formGroup.get(mainField)?.value;
      const password2 = formGroup.get(secondField)?.value;

      if(password1 !== password2) {
        formGroup.get(secondField)?.setErrors({notEqual: true});
        return {
          notEqual: true
        }
      }

      formGroup.get(secondField)?.setErrors(null);

      return null;
    }

  }

  
}
