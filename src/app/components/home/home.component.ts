import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoSeleccionado: any;

  constructor(public _ytService: YoutubeService){
    this._ytService.getVideos().subscribe( videos => this.videos.push.apply(this.videos, videos));
  }

  ngOnInit() {
  }
  verVideo(video: any){
    console.log(video);
    this.videoSeleccionado = video;
    $('#exampleModal').modal();
  }

  cerrarModal(){
    this.videoSeleccionado = null;
    $('#exampleModal').modal('hide');
  }

  cargarMas(){
    this._ytService.getVideos().subscribe( videos => this.videos.push.apply(this.videos, videos));

  }

}
