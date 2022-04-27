import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
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

  public updateVideo(id: string, title: string, type: string, description: string): Observable<any>{
    let body = new URLSearchParams();
    body.set('videoTitle', title);
    body.set('videoType', type);
    body.set('videoDescription', description); 
    
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.put(`http://localhost:8089/updatevideo/${id}`, body.toString(), {headers, responseType: 'text'});
  }
}
