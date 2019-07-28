import { YoutubeService } from './services/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'youtubeApp';
  constructor(public _ytService: YoutubeService){
    this._ytService.getVideos().subscribe();
  }

  // getVideos(){
  //   this.ytService.getVideos().subscribe(data => {
  //     console.log(data);
  //   });
  // }

  ngOnInit(){
    // this.getVideos();
  }

}
