import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    '(window:resize)': 'onResize($event.target)'
  }
})
export class DashboardComponent implements OnInit {

  public isShow: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setView(screen.width);
  }

  public changeSidebar(): void{
    this.isShow = !this.isShow;
  }

  onResize(target: Window): void {
    this.setView(target.innerWidth);
  }

  private setView(width: number): void{
    this.isShow = (width >= 1024) ? true : false;
  }

}
