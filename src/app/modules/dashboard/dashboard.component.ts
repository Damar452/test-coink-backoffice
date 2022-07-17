import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class DashboardComponent implements OnInit {

  public isShow: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public changeSidebar(){
    this.isShow = !this.isShow;
  }

  onResize(event: any){
    const width = event.target.innerWidth;
    this.isShow = (width < 1024) ? false : true;
  }

}
