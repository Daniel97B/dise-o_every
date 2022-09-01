import { Injectable } from '@angular/core';
import { environment } from '@env/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  //! Creamos los metodos de coneccion con la api
  //? logueo
  login(): void{}
  //TODO Cerrar secion  
  logout(): void{}

  private readToken(): void{}
  private saveToken():void{}
  private handlerError():void{}

}
