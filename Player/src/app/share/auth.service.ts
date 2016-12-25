import { Injectable } from '@angular/core';
//import { User } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { User } from './User';

@Injectable()
export class AuthService {

  public currentUser: User;


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

  loginUser(data: any) : any {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8000/users', data, options)
        .map((res: Response) => {
         /*this.currentUser = res.json();*/
         let user = res.json(); 
         localStorage.setItem('username', user.username);
         return res.json() 
        })
        .catch((error:any) => Observable.throw('error'));
  }

  isUser(): boolean {
    //console.log(this.currentUser);
    //console.log(!!this.currentUser);
    //return !!this.currentUser;
    return !!(localStorage.getItem('username'))
  }

}
