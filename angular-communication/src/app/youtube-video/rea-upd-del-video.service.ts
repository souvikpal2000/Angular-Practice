import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Youtube } from './youtube';

@Injectable({
  providedIn: 'root'
})
export class ReaUpdDelVideoService {

  videos: Youtube[]=[];

  constructor(private http: HttpClient) { }

  public getVideos(): Observable<any>{
    return this.http.get("http://localhost:8089/getvideos");
  }

  public deleteVideo(id:string): Observable<any>{
    return this.http.delete(`http://localhost:8089/deletevideo/${id}`, {responseType: 'text'});
  }
}
