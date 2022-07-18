import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { headers } from 'src/app/core/constants/solicite-card';
import { userDemo } from 'src/app/core/models/user-demo';
import { DemoDataService } from 'src/app/core/services/demo-data.service';

@Component({
  selector: 'app-solicite-card',
  templateUrl: './solicite-card.component.html',
  styleUrls: ['./solicite-card.component.scss']
})
export class SoliciteCardComponent implements OnInit {

  public searchForm: FormGroup;
  public tableHeaders: any[] = headers;
  public userList: any = [];
  public modalForm: boolean = false;
  public modalConfirm: boolean = false;
  public modalSuccess: boolean = false;
  public value: string;

  constructor(
    private dataDemo: DemoDataService,
    private formBuild: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getCharacters();
    this.createForm();
  }

  public getCharacters() {
    this.dataDemo.getCharacters().subscribe((data) => {
      const { info, results } = data;
      this.setData(results);
    });
  }

  public openConfirm(value: string) {
    this.value = value;
    this.modalConfirm = true;
  }

  public openSuccess() {
    this.modalSuccess = true;
    setTimeout(() => {
      this.hideModals()
    }, 1000);
  }

  public onSearch() {
    const { character, type } = this.searchForm.controls;
    this.dataDemo.filterCharacters(character.value, type.value).subscribe({
      next: (data) => {
        this.setData(data.results);
      },
      error: () => {
        this.userList = [];
      }
    })
  }

  private setData(results: any) {
    this.userList = results.map((user: any) => {
      const { id, name, gender, species, status } = user;
      return { id, name, gender, species, status };
    })
  }

  private hideModals(){
    this.modalSuccess = false;
    this.modalConfirm = false;
    this.modalForm = false;
  }

  private createForm(): void {
    this.searchForm = this.formBuild.group({
      character: [''],
      type: ['']
    });
  }

}
