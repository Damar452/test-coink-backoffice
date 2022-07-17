import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public email: string = 'example@email.com';
  public password: string = '12345678';
  

  constructor() { }

  public login(user: string, password: string){
   return (this.email === user && this.password === password);
  }
}
