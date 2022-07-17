import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private nameUser: string = 'USER_DATA';

  constructor() { }
  
	/**
	 * Crea un elemento en el localstorage
	 */
	public create(name: string, value: any): void {
		window.localStorage.setItem(name, JSON.stringify(value));
	}

	/**
	 * Obtiene un elemento mediante el name de localstorage
	 */
	public getItem(name: string): any {
		return JSON.parse(window.localStorage.getItem(name)!);
	}

	/**
	 * Elimina un elemento por name de localstorage
	 */
	public removeItem(name: string): any {
		return window.localStorage.removeItem(name);
	}

	/**
	 * Elimina todos los elementos de localstorage
	 */
	public clear(): void {
		return window.localStorage.clear();
	}

  public setUser(value: any){
    this.create(this.nameUser, value);
  }

  public getUSer(){
    return this.getItem(this.nameUser);
  }

	public getToken() {
		return JSON.parse(window.localStorage.getItem('USER_DATA')!).token;
	}
}
