import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './shared/creation/creation.component';
import { UsersComponent } from './shared/users/users.component';
import { EditComponent } from './shared/edit/edit.component';
import { ViewComponent } from './shared/view/view.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuardService } from './core/canactivate';
import { HomeComponent } from './shared/home/home.component';
import { GuardService } from './core/guardexistente';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent , canActivate : [AuthGuardService] },
  { path: 'users/creation', component: CreationComponent },
  { path: 'users/edit/:nombre', component: EditComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'users/:nombre', component: ViewComponent, canActivate : [GuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
