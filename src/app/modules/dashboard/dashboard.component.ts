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

  public isShow: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setView(screen.width);
  }

  public changeSidebar(){
    this.isShow = !this.isShow;
  }

  onResize(event: any){
    this.setView(event.target.innerWidth);
  }

  setView(width: number){
    this.isShow = (width >= 1024) ? true : false;
  }

}
