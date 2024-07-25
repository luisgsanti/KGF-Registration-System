import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  value: string | undefined;
}