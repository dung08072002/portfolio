import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = 'http://localhost:4201/users';

  constructor(private http : HttpClient) { }
  signUp (user: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/signup`, user);
  }
  signIn (user: any | undefined): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/signin`, user);
  }
}