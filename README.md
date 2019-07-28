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
```

Para esto se puede usar el link del video: https://www.youtube.com/watch?v=z9VfDlQMsDI
