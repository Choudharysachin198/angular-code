import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AuthService } from '../../services/auth.service';
import { AddPrivacyComponent } from './add-privacy/add-privacy.component';
import { ViewEnquiresComponent } from './view-enquires/view-enquires.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { path: 'login',
    component: LoginComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthService]
  },
  {
    path: 'add_category',
    component: AddCategoryComponent,
    canActivate:[AuthService]
  },
  {
    path: 'view_category',
    component: ViewCategoryComponent,
    canActivate:[AuthService]
  },
  {
    path: 'edit_category/:id',
    component: AddCategoryComponent,
    canActivate:[AuthService]
  },
  {
    path: 'add_privacy',
    component: AddPrivacyComponent,
    canActivate:[AuthService]
  },
  {
    path: 'view_enquiry',
    component: ViewEnquiresComponent,
    canActivate:[AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
