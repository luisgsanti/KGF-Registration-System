import { Component } from '@angular/core';

//components
import { HeaderHomeComponent } from "../../components/header-home/header-home.component";
import { CaroselComponent } from "../../components/carosel/carosel.component";
import { AccordionFrequentQuestionsComponent } from "../../components/accordion-frequent-questions/accordion-frequent-questions.component";
import { ImgTextAnimationComponent } from "../../components/img-text-animation/img-text-animation.component";
import { ThreeBoxesComponent } from "../../components/three-boxes/three-boxes.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderHomeComponent, CaroselComponent, AccordionFrequentQuestionsComponent, ImgTextAnimationComponent, ThreeBoxesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
