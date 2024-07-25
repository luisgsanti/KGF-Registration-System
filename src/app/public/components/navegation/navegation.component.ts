import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-navegation',
  standalone: true,
  imports: [RouterModule, PrimeNgModule],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.css'
})
export class NavegationComponent {

}
