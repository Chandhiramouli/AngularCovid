import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Enduser } from './enduser.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  
  apiUrl="http://localhost:9191/get";

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<Enduser[]>(this.apiUrl);
  }
}