import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Info } from 'src/app/core/models/character-model';
import { Header } from 'src/app/core/models/table-model';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  host: {
    '(window:resize)': 'onResize($event.target)'
  }
})
export class CustomTableComponent implements OnChanges {

  @Input() headers: Header[];
  @Input() data: any[];
  @Input() info: Info;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();
  public widthClass: string;
  public pagesArray: number[];
  public indexPage: number = 1;
  public rangePage: number[];

  constructor(){

  }

  ngOnChanges(): void {
    this.setwidth(screen.width);
    this.setpageArray();
  }

  onResize(target: Window){
    this.setwidth(target.innerWidth);
  }

  setwidth(width: number): void{
    this.widthClass = (width >= 1024) ? 'desktop' : 'mobile';
  }

  private setpageArray(){
    this.pagesArray = new Array(this.info?.pages);
    for (let index = 0; index < this.pagesArray.length; index++) {
      this.pagesArray?.fill(index + 1 , index);
    }
    const range = this.info?.pages >= 5 ? 5 : this.info?.pages;
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
  }

  private setRange(initial: number, range: number){
    initial = initial - 1;
    this.rangePage = this.pagesArray?.slice(initial , initial + range);
  }

  private changeRange(){
    this.onChangePage.emit(this.indexPage);
    const include = this.rangePage.includes(this.indexPage);
    !include && this.setRange(this.indexPage, 5);
  }

}
