import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../signup/user';

@Injectable({
  providedIn: 'root'
})
export class DeleteUpdateUserService {

  constructor(private http: HttpClient) { }

  public getAllUser(): Observable<any>{
    return this.http.get("http://localhost:8089/getusers", {responseType: "json"});
  }

  public deleteUser(username: string): Observable<any>{
    return this.http.delete(`http://localhost:8089/deleteuser/${username}`);
  }

  public updateUser(user: User): Observable<any>{
    return this.http.post("http://localhost:8089/updateuser", user);
  }
}
