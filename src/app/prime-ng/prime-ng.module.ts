import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//list components of PrimeNG
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel" 
import { StepperModule } from 'primeng/stepper';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    FloatLabelModule,
    StepperModule,
    AccordionModule
  ]
})
export class PrimeNgModule { }
