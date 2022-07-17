import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public validationFieldForm(form: FormGroup): boolean {
    Object.values(form.controls).forEach(item => {
      item instanceof FormControl && item.markAsTouched();
    });
    return form.valid;
  }

  public validateinput(form: FormGroup, param: string): boolean | undefined {
    return form?.get(param)?.invalid && form?.get(param)?.touched;
  }

  public hasError(form: FormGroup, type: string, control: string): boolean {
    return form?.get(control)?.errors![type];
  }

  public isInValid(form: FormGroup , control: string): boolean {
    return !!form.get(control)?.touched && !!form.get(control)?.errors;
  }
}
