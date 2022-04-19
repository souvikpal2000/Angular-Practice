import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public addUser(user: User): Observable<any>{
    return this.http.post("http://localhost:8089/adduser", user, {responseType: "text"});
  }
}
