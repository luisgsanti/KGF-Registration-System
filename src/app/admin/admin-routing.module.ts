import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { LoginComponent } from './pages/login/login.component';
import { ManageEnrollmentsComponent } from './pages/manage-enrollments/manage-enrollments.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
      component: AdminLayoutComponent,
      children: [
        {path: 'manageEnrollments', component: ManageEnrollmentsComponent},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'update-password', component: UpdatePasswordComponent},


      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
