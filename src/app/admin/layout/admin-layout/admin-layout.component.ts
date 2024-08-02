import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SidenavComponent, RouterModule, CommonModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    // Obtener la ruta actual
    const currentUrl = this.router.url;

    // Verificar si la ruta actual es la página de login del admin
    return currentUrl === '/admin/login';
  }
}
