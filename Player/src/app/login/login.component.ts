import { Component, OnInit, ViewChild  } from '@angular/core';
import { TabViewModule } from 'primeng/primeng';

import { LoginForm } from '../share/login-form';
import { RegistrationForm } from '../share/registration-form';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(RegistrationForm)

  public rf: RegistrationForm;

  constructor() { }

  ngOnInit() {
  }

  modalDialog(): boolean {
    return  this.rf.df.form.dirty;
  }
  wasClicked(): boolean {
    return  this.rf.df.clicked;
  }

}
