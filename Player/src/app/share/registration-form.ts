import { Component }       from '@angular/core';
import { FieldsService } from '../forms/fields.service';

@Component({
  selector: 'registration-form',
  template: `
    <div>
      <dynamic-form [fields]="fields"></dynamic-form>
    </div>
  `,
  providers:  [FieldsService]
})

export class RegistrationForm {
  fields: any[];

  constructor(service: FieldsService) {
    this.fields = service.getFieldsForRegistration();
  }
}
