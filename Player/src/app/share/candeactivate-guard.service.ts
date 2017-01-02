import { Injectable } from '@angular/core';
import { CanDeactivate,  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from '../login/login.component';


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(target: LoginComponent): any {
    if(target.modalDialog() && !target.wasClicked()){
      return window.confirm('Do you really want to cancel?');
    }
    return true;
  }

}
