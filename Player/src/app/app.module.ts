import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { TabViewModule, DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { AppRoutingModule } from './share/app.routing.ts';
import { LoginForm } from './share/login-form';
import { RegistrationForm } from './share/registration-form';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormFieldsComponent } from './dynamic-form-field/dynamic-form-field.component';
//import { LoggedHeaderComponent } from './logged-header/logged-header.component';
//import { LoginGuard } from './share/login-guard.service';
import { AuthService} from './share/auth.service';
import { UserService } from './share/user.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { AccountComponent } from './account/account.component';
import { ContentComponent } from './content/content.component';
import { ResolveService } from './share/resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginForm,
    RegistrationForm,
    DynamicFormComponent,
    DynamicFormFieldsComponent,
    PlaylistComponent,
    AccountComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TabViewModule,
    ButtonModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [
     AuthService,
     UserService,
     ResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
