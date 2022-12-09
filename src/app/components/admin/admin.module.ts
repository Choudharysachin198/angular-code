import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {ToastrModule} from 'ngx-toastr'
//import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminRoutingModule } from './admin-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPrivacyComponent } from './add-privacy/add-privacy.component';
import { ViewEnquiresComponent } from './view-enquires/view-enquires.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddPrivacyComponent,
    ViewEnquiresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AngularEditorModule,
    NgxPaginationModule
    // BrowserAnimationsModule,
     //ToastrModule
    //ToastrModule.forRoot()
  ]
})
export class AdminModule { }
