import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { User } from './User';
import { UserService } from '../share/user.service';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ResolveService implements Resolve<any>{

	constructor(private us: UserService) {}

	resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.us.mix().subscribe((res) => { return res.aTracks });
  }

}