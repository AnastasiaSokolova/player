import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(private http: Http){}
  
  public api_key = 'JJXZSDWMTX87EG9Q';


  mix(): any {
  	return this.http.get('https://freemusicarchive.org/featured.json?api_key=' + this.api_key + '&limit=50')
      .map((res: Response) => { return res.json() })
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
  	.map((res: Response) => {
  		   console.log(res.json());
           return res.json()
    })
    .catch((error:any) => Observable.throw('error'));
  }
}
