import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  public inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit();
  }

  send(){
    console.log(this.inputValue)
  }

}
