import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component.ts';
import { HeaderComponent } from '../header/header.component.ts';
import { ModuleWithProviders } from '@angular/core';

export const  appRoutes: Routes = <Routes>[
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HeaderComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

