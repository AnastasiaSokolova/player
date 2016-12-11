import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { TabViewModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { AppRoutingModule } from './share/app.routing.ts';
import { LoginForm } from './share/login-form';
import { RegistrationForm } from './share/registration-form';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormFieldsComponent } from './dynamic-form-field/dynamic-form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginForm,
    RegistrationForm,
    DynamicFormComponent,
    DynamicFormFieldsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TabViewModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
