import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Header } from 'src/app/core/models/table-model';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  host: {
    '(window:resize)': 'onResize($event.target)'
  }
})
export class CustomTableComponent implements OnInit{

  @Input() headers: Header[];
  @Input() data: any[];
  @Input() pages: number;
  @Input() count: number;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();
  public contentClass: string;
  public tableClass: string;
  public pagesArray: number[];
  public rangePage: number[];
  public indexPage: number = 1;
  private numbers: number;

  constructor(){}

  ngOnInit(): void {
    this.setwidth(screen.width);
    setTimeout(() => { this.setpageArray() }, 100);
  }

  onResize(target: Window){
    this.setwidth(target.innerWidth);
  }

  setwidth(width: number): void{
    this.contentClass = (width >= 1024) ? 'content-desktop' : 'content-mobile';
    this.tableClass = (width >= 1024) ? '' : 'table-width';
    this.numbers = (width >= 1024) ? 5 : 3;
  }

  private setpageArray(){
    this.pagesArray = new Array(this.pages);
    for (let index = 0; index < this.pagesArray.length; index++) {
      this.pagesArray?.fill(index + 1 , index);
    }
    const range = this.pages >= this.numbers ? this.numbers : this.pages;
    this.setRange(1, range);
  }

  public next(){
    const index = this.pagesArray;
    if( this.indexPage  < index[index.length - 1]){
      this.indexPage++;
      this.changeRange();
    }
  }

  public prev(){
    if(this.indexPage > 1){
      this.indexPage--;
      this.changeRange();
    }
  }

  public selectNumber(num: number){
    this.indexPage = num;
    this.changeRange();
  }

  private setRange(initial: number, range: number){
    initial = initial - 1;
    this.rangePage = this.pagesArray.slice(initial , initial + range);
  }

  private changeRange(){
    const include = this.rangePage.includes(this.indexPage);
    !include && this.setRange(this.indexPage, this.numbers);
    this.onChangePage.emit(this.indexPage);
  }

}
