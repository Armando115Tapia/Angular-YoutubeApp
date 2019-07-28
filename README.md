## Youtube app

En está applicación se usa HttpParams (en el servicio) para armar un url cuando el endpoint requiere muchas parámetros

```javascript
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
 // El link obtenido de aqui es:
 // https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCQ8jTcfNOaBUwRSTQUybEug%26maxResults&maxResults=10&key='api-key'  
```


Para esto se puede usar el link del video: https://www.youtube.com/watch?v=z9VfDlQMsDI

Pipe para asegurar el DOM y se pueda insertar código de otras páginas

```javascript
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: string): any {
    let url = "https://www.youtube.com/embed/";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }
}

```
