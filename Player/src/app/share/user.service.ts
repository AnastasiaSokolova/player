import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService {

  constructor(private http: Http){}
  
  public api_key = 'JJXZSDWMTX87EG9Q';
  public url = 'https://api.soundcloud.com/tracks?client_id=' + 'rOq2IJF84CUOeFmbtBU4yjH506GnKxpJ';


  mix(): any {


      return this.http.get(this.url)
        .map((res: Response) => { return res.json() })
   
  	//return this.http.get('https://freemusicarchive.org/featured.json?api_key=' + this.api_key + '&limit=50')
      //.map((res: Response) => { return res.json() })
  }

  saveTracks(src1: string, src2: string): any{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8000/setplaylist', {'username': localStorage.getItem('username'), 'track_url': src1, 'image_url': src2}, options)
        .map((res: Response) => {
           return res.json()
        })
        .catch((error:any) => Observable.throw('error'));
  }

  loadTracks(): any {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

  	return this.http.post('http://localhost:8000/getplaylist', {'username': localStorage.getItem('username')})
  	.map((res) => {
           return res.json()
    })
    .catch((error:any) => Observable.throw('error'));
  }

   deleteTrack(track: String): any {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
   	  
      return this.http.post('http://localhost:8000/deleteTrack', {'username': localStorage.getItem('username'), 'id': track}, options)
        .map((res) => {
          return res.json();
        })
        .catch((error:any) => Observable.throw('error'));
   }

   
}
