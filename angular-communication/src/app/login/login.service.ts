import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public getAllUser(): Observable<any>{
    return this.http.get("http://localhost:8089/getusers", {responseType: "json"});
  }
}
