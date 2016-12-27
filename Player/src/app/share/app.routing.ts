import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component.ts';
import { HeaderComponent } from '../header/header.component.ts';
import { ModuleWithProviders } from '@angular/core';
import { LoginGuard } from './login-guard.service';
import { PlaylistComponent } from '../playlist/playlist.component';
import { AccountComponent } from '../account/account.component';
import { CanDeactivateGuard }  from '../share/candeactivate-guard.service';

export const  appRoutes: Routes = <Routes>[
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'home',
    component: HeaderComponent
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

