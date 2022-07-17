import { Component, OnInit } from '@angular/core';
import { headers } from 'src/app/core/constants/solicite-card';
import { userDemo } from 'src/app/core/models/user-demo';
import { DemoDataService } from 'src/app/core/services/demo-data.service';

@Component({
  selector: 'app-solicite-card',
  templateUrl: './solicite-card.component.html',
  styleUrls: ['./solicite-card.component.scss']
})
export class SoliciteCardComponent implements OnInit {

  public tableHeaders: any[] = headers;
  public userList: any = [];
  public modalForm: boolean = false;

  constructor(private dataDemo: DemoDataService) { }

  ngOnInit(): void {
    this.dataDemo.getCharacters().subscribe((data) => {
      
      const {info, results } = data;
      
      this.userList = results.map((user: any) => {
        const {id, episode, status, created, name} = user;
        return {id, name, cardNumbers: episode.length, status, dateHour: created};
      })

      this.showData();
    });

  }

  showData(){
    console.log(this.userList)
  }

}
