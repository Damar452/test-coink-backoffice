import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Characters } from '../models/character-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getCharacters(page: string |number = '1'): Observable<Characters>{
    return this.http.get<Characters>(`${environment.API}character?page=${page}`);
  }

  public filterCharacters(name: string, type: string): Observable<Characters>{
    return this.http.get<Characters>(`${environment.API}character?name=${name}&type=${type}`);
  }
}
