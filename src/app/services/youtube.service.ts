import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url: string = 'https://www.googleapis.com/youtube/v3';
  private apikey: string = 'AIzaSyCB4u51QBXPtQ1aad7qawb4L8pHQYgfWqk';
  private chanelId: string = 'UCQ8jTcfNOaBUwRSTQUybEug';
  private nextIdToken: string = '';

  constructor(public http: HttpClient) {}


  getVideos(){

     let url = `${this.url}/playlistItems`;
     let playlistId='PLr6ePnxUUANsOmw5C_RJV-WVWkcjAfwJW';

     let params = new HttpParams();

         params = params.append('part','snippet');
         params = params.append('maxResults','10');
         params = params.append('playlistId', playlistId);
         // params = params.append('channelId',this.chanelId);
         params = params.append('key', this.apikey);
         if(this.nextIdToken){
          params = params.append('pageToken', this.nextIdToken);
         }


     return this.http.get(url, {params})
            .pipe(map((res: any) => {
              console.log("Respuesta de la listaItems",res);
              this.nextIdToken = res.nextPageToken;
              let videos: any[] =[];
              for (let video of res.items){
                let snnipet = video.snippet;
                videos.push(snnipet);
              }
              return videos;
            }));
   }


}
