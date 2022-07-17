import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-default-input',
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> DefaultInputComponent),
      multi: true
    }
  ]
})
export class DefaultInputComponent {

  @Input() label : string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() form: FormGroup;
  @Input() inputName:string;
  @Input() valor:string = "";
  @Input() placeholder: string = "";
  @Input() icon: string = "";
  @Input() inputClass: string = "";

  @Output() onClickIcon: EventEmitter<boolean> = new EventEmitter();

  public isFocus: boolean = false;
  private onChange: (_: string)=> void;
  private onTouched: any = () => {};
  public value: string = '';
  public isText: boolean = false;

  constructor(private formService: FormService) { }

  public get spanClass(){
    return `fa-solid fa-${this.icon}`
  }

  public touchIcon(): void{
    this.onClickIcon.emit(true);
  }

  public writeValue(value:string): void {
    this.value = value;
  }

  public registerOnChange(fn:any): void {
    this.onChange=fn;
  }

  public registerOnTouched(fn:any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  public validateInput(): boolean | undefined {
    return this.formService.validateinput(this.form, this.inputName);
  }

  public onInputChange(event: any): void {
    this.value = event;
    this.onChange && this.onChange(this.value)
  }

  public onInputFocus(): void {
    this.isFocus = true;
  }

  public onInputBlur(): void{
    this.isFocus = false;
    this.onTouched && this.onTouched();
  }

}
