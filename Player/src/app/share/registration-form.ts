import { Component } from '@angular/core';
import { FieldsService } from '../forms/fields.service';
import { AuthService } from '../share/auth.service';
import 'rxjs/Rx';

@Component({
  selector: 'registration-form',
  template: `
    <div>
      <dynamic-form [fields]="fields" (onSubmit)="onSubmit($event)"></dynamic-form>
    </div>
  `,
  providers:  [FieldsService, AuthService]
})

export class RegistrationForm {
  fields: any[];

  constructor(service: FieldsService, private authService: AuthService) {
    this.fields = service.getFieldsForRegistration();
  }

  onSubmit(value) {
    this.authService.addUser(value).subscribe(
      err => {
        console.log(err);
      });
  }
}
