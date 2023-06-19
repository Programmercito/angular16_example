import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationComponent } from './shared/creation/creation.component';
import { UsersComponent } from './shared/users/users.component';
import { EditComponent } from './shared/edit/edit.component';
import { LoginComponent } from './shared/login/login.component';
import { ViewComponent } from './shared/view/view.component';
import { PermisionsService } from './core/permisions.service';
import { AuthGuardService } from './core/canactivate';
import { HomeComponent } from './shared/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { GuardService } from './core/guardexistente';

@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    UsersComponent,
    EditComponent,
    LoginComponent,
    ViewComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermisionsService, AuthGuardService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
