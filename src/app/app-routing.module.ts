import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';

const routes: Routes = [


  {
    path: 'login',
    component: LoginComponent,

  }, {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'resultado',
    component: ResultadoComponent
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
