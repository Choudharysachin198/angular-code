import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
// import { LoginComponent } from './components/admin/login/login.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'dashboard', component: DashboardComponent },
// ];

const routes: Routes = [ 
                          { path: 'admin', 
                          loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
                          // { path: 'game', 
                          // loadChildren: () => import('./components/game/game.module').then(m => m.GameModule) }
                        ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }