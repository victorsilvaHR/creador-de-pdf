import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './servicios/users.service';
const routes: Routes = [
  { path: 'home', component: CotizadorComponent, canActivate: [UserService] },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
