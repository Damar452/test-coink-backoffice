import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRouting } from './auth.routing';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRouting),
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
