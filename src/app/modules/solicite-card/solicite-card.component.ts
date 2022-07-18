import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { headers } from 'src/app/core/constants/solicite-card';
import { Character, Info } from 'src/app/core/models/character-model';
import { Header } from 'src/app/core/models/table-model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-solicite-card',
  templateUrl: './solicite-card.component.html',
  styleUrls: ['./solicite-card.component.scss']
})
export class SoliciteCardComponent implements OnInit {

  public searchForm: FormGroup;
  public characterList: Character[] = [];
  public infoTable: Info;
  public tableHeaders: Header[] = headers;
  public modalForm: boolean = false;
  public modalConfirm: boolean = false;
  public modalSuccess: boolean = false;
  public value: string;

  constructor(
    private dataDemo: DataService,
    private formBuild: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getCharacters();
    this.createForm();
  }

  public getCharacters(page: string | number = '1'): void{
    this.dataDemo.getCharacters(page).subscribe((data) => {
      this.setData(data.info, data.results);
    });
  }

  public openConfirm(value: string): void{
    this.value = value;
    this.modalConfirm = true;
  }

  public openSuccess(): void{
    this.modalSuccess = true;
    setTimeout(() => {
      this.hideModals()
    }, 1000);
  }

  public onSearch(): void {
    const { character, type } = this.searchForm.controls;
    this.dataDemo.filterCharacters(character.value, type.value).subscribe({
      next: (data) => {
        this.setData(data.info, data.results);
      },
      error: () => {
        this.characterList = [];
      }
    })
  }

  private setData(info: Info, results: Character[]): void{
    this.characterList = results;
    this.infoTable = info;
  }

  private hideModals(): void{
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
