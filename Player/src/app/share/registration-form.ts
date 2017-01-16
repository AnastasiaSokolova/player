import { Component, ViewChild } from '@angular/core';
import { FieldsService } from '../forms/fields.service';
import { AuthService } from '../share/auth.service';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'registration-form',
  template: `
    <div>
      <dynamic-form [fields]="fields" (onSubmit)="onSubmit($event)" [buttonName]="buttonName"></dynamic-form>
    </div>
  `,
  providers:  [FieldsService, AuthService]
})

export class RegistrationForm {

  @ViewChild(DynamicFormComponent)
  public df: DynamicFormComponent;
  buttonName: String = 'Registered'

  fields: any[];

  constructor(service: FieldsService, private authService: AuthService,
    private router: Router) {
    this.fields = service.getFieldsForRegistration();
  }

  onSubmit(value) {
    this.authService.addUser(value).subscribe(()=> this.router.navigate(['/home']));
    
  }
}
