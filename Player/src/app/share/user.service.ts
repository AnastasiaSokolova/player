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
}
