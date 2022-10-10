import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule,
    CoreModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
