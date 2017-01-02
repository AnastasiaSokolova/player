import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginGuard } from './login-guard.service';
import { PlaylistComponent } from '../playlist/playlist.component';
import { AccountComponent } from '../account/account.component';
import { CanDeactivateGuard }  from '../share/candeactivate-guard.service';
import { LoginForm } from '../share/login-form';
import { RegistrationForm } from '../share/registration-form';
import { ContentComponent } from '../content/content.component';
import { ResolveService } from '../share/resolve.service';
 
export const  appRoutes: Routes = <Routes>[
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: 'loginform',
        component: LoginForm,
      },
      {
        path: 'registration',
        component: RegistrationForm,
      },
      {
        path: '',
        component: LoginComponent, 
      } 
    ]
  },
  {
    path: 'home',
    component: ContentComponent,
    resolve: {
         tracks: ResolveService
    },
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [LoginGuard]

  },
  {
    path: 'playlist',
    component: PlaylistComponent,
    canActivate: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginGuard,
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {}

