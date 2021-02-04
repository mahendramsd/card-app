import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';


const routes: Routes = [

  {
    path: 'credit-card',
    loadChildren: () => import('./containers/containers.module').then(mod => mod.ContainersModule)
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
