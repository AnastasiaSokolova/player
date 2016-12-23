import { Component } from '@angular/core';
import { FieldsService } from '../forms/fields.service';
import { AuthService } from '../share/auth.service';
import 'rxjs/Rx';

@Component({
  selector: 'login-form',
  template: `
    <div>
      <dynamic-form [fields]="fields" (onSubmit)="onSubmit($event)"></dynamic-form>
    </div>
 `,
  providers:  [FieldsService, AuthService]
})

export class LoginForm {
  fields: any[];

  constructor(service: FieldsService, private authService: AuthService) {
    this.fields = service.getFieldsForLogin();
  }

  onSubmit(value) {
    this.authService.isUser(JSON.stringify(value)).subscribe((data) => console.log(data))
  }

}
