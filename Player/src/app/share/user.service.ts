import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http){}

  addUser(user: User): Observable<User[]> {
       console.log(JSON.stringify(user))
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });

       return this.http.post('http://localhost:8000/login', JSON.stringify(user), options)
         .map((res: Response) => {  res.json() })
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
