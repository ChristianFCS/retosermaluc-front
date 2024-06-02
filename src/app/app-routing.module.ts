import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [


  {
    path: 'login',
    component: LoginComponent,

  }, {
    path: 'main',
    component: MainComponent,
    canActivate: [authGuard]
  },
  {
    path: 'resultado',
    component: ResultadoComponent,
    canActivate: [authGuard]
  },
  {
    path: '**', redirectTo: 'login'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
