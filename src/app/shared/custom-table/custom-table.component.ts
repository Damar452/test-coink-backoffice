import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class CustomTableComponent implements OnInit {

  public widthClass: string;
  @Input() headers: any[];
  @Input() data: any[];

  constructor() { }

  ngOnInit(): void {
   this.setwidth(screen.width);
  }

  onResize(event: any){
    const width = event.target.innerWidth;
    this.setwidth(width);
  }

  setwidth(width: number){
    this.widthClass = (width >= 1024) ? 'desktop' : 'mobile';
  }

}
