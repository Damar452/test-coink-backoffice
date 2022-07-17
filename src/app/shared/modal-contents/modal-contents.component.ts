import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-contents',
  templateUrl: './modal-contents.component.html',
  styleUrls: ['./modal-contents.component.scss']
})
export class ModalContentsComponent implements OnInit {

  @Input() title: string;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  @Output() onSend: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public send(){

  }

  public close(){
    this.onClose.emit();
  }

}
