import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SiginFormComponent } from './sigin-form/sigin-form.component';


const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: '', component: SiginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
