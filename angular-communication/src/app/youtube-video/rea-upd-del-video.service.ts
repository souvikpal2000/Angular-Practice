import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReaUpdDelVideoService {

  constructor(private http: HttpClient) { }

  public getVideos(): Observable<any>{
    return this.http.get("http://localhost:8089/getvideos");
  }
}
