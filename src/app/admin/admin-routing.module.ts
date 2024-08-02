import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { LoginComponent } from './pages/login/login.component';
import { ManageEnrollmentsComponent } from './pages/manage-enrollments/manage-enrollments.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';

// Guards
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
      component: AdminLayoutComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'manageEnrollments', component: ManageEnrollmentsComponent, canActivate: [AuthGuard] },
        { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        { path: 'update-password', component: UpdatePasswordComponent, canActivate: [AuthGuard] },
        { path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: '**', redirectTo: 'login' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
