import { Component } from '@angular/core';
import { FieldsService } from '../forms/fields.service';

@Component({
  selector: 'login-form',
  template: `
    <div>
      <dynamic-form [fields]="fields"></dynamic-form>
    </div>
 `,
  providers:  [FieldsService]
})

export class LoginForm {
  fields: any[];

  constructor(service: FieldsService) {
    this.fields = service.getFieldsForLogin();
  }

}
