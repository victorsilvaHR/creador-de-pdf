import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './servicios/guard.service';

const routes: Routes = [
  { path: 'home', component: CotizadorComponent, canActivate: [AuthGuard] }, 
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
