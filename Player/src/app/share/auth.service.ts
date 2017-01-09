import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { User } from './User';

@Injectable()
export class AuthService {

  public currentUser: User;


  constructor(private http: Http){}

  //don`t use it yet
  getUsers(): any {
    return this.http.get('http://localhost:8000/users')
      .map((res: Response) => { return res.json() })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUser(username: String): any {
    return this.http.get('http://localhost:8000/users/'+username)
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
           let user = res.json();
           localStorage.setItem('username', user.username);
           return res.json()
        })
        .catch((error:any) => Observable.throw('error'));
  }

  isUser(): boolean {
    return !!(localStorage.getItem('username'))
  }

}
