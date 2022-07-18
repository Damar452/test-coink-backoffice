import { Component, Input, OnInit } from '@angular/core';
import { Header } from 'src/app/core/models/table-model';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  host: {
    '(window:resize)': 'onResize($event.target)'
  }
})
export class CustomTableComponent implements OnInit {

  @Input() headers: Header[];
  @Input() data: any[];
  public widthClass: string;

  ngOnInit(): void {
   this.setwidth(screen.width);
  }

  onResize(target: Window){
    this.setwidth(target.innerWidth);
  }

  setwidth(width: number): void{
    this.widthClass = (width >= 1024) ? 'desktop' : 'mobile';
  }

}
