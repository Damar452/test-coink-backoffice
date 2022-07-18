import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  @Input() title: string;
  @Input() label: string;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  @Output() onSend: EventEmitter<string> = new EventEmitter();

  public cardsForm: FormGroup;

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public close(): void{
    this.onClose.emit();
  }

  public send(): void{
    this.onSend.emit(this.cardsForm.get('amount')!.value);
  }

  private createForm(): void {
    this.cardsForm = this.formBuild.group({
      amount: ['', [Validators.required]],
    });
  }

}
