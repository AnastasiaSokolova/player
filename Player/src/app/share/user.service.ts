import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

@Injectable()
export class UserService {

  constructor(private http: Http, private df: DynamicFormComponent){}

  checkForm(): boolean {
     return this.df.form.dirty;
  }
}
