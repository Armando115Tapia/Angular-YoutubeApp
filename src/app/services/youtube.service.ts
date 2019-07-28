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

  constructor(public http: HttpClient) {}


  getVideos(){

     let url = `${this.url}/playlists`;

     let params = new HttpParams();

         params = params.append('part','snippet');
         params = params.append('channelId',this.chanelId);
         params = params.append('maxResults','10');
         params = params.append('key', this.apikey);


     return this.http.get(url, {params})
            .pipe(map((res: any) => {console.log(res.items)}));

   }


}
