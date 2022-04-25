import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Youtube } from './youtube';

@Injectable({
  providedIn: 'root'
})
export class AddVideoService {

  constructor(private http: HttpClient) { }

  public addVideo(data: Youtube): Observable<any>{
    return this.http.post("http://localhost:8089/addvideo", data, {responseType: "text"});
  }
}
