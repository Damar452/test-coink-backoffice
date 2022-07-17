import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {

  constructor(private http: HttpClient) { }

  public getCharacters(){
    return this.http.get<any>(`${environment.API}character?page=1`);
  }
}
