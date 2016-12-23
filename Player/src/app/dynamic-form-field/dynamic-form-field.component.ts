import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldsBase } from '../forms/fields-base';
@Component({
  selector: 'df-fields',
  templateUrl: 'dynamic-form-field.component.html',
  styleUrls: ['dynamic-form-field.component.scss']
})
export class DynamicFormFieldsComponent {
  @Input() field :FieldsBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}
