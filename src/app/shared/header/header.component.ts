import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = "BACKOFFICE";

  @Output() onChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  public changeShow(){
    this.onChange.emit();
  }

}
