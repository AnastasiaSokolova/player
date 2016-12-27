import { Component, ViewChild } from '@angular/core';
import { FieldsService } from '../forms/fields.service';
import { AuthService } from '../share/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
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
  @ViewChild(DynamicFormComponent)
  public df: DynamicFormComponent;

  fields: any[];

  constructor(service: FieldsService, private authService: AuthService, private router: Router) {
    this.fields = service.getFieldsForLogin();
  }

  onSubmit(value) {
    this.authService.loginUser(JSON.stringify(value)).subscribe((data) => {this.router.navigate(['/home'])})
  }

}
