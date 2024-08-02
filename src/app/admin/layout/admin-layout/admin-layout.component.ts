import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SidenavComponent, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
