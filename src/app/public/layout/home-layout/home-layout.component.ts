import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

//components
import { NavegationComponent } from "../../components/navegation/navegation.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterModule, NavegationComponent, FooterComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}
