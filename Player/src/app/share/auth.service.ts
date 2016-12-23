import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {


  constructor(private http: Http){}

  getUsers(): any {
    return this.http.get('http://localhost:8000/users')
      .map((res: Response) => { return res.json() })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addUser(user: User): Observable<User[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8000/login', JSON.stringify(user), options)
      .map((res: Response) => { return res.json() })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  isUser(data: any) : any {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8000/users', data, options)
        .map((res: Response) => { return res.json() })
        .catch((error:any) => Observable.throw('error'));
    }
}
