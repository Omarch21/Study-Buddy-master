import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/signup/signup.component';
const routes: Routes = [
 {
  path: 'login',
  component:LoginComponent
 },
 {
  path: '',
  component: HomeComponent
 },
 {
  path: 'signup',
  component: SignUpComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
