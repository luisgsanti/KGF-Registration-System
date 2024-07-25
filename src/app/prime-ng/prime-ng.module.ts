import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//list components of PrimeNG
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel" 


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    FloatLabelModule
  ]
})
export class PrimeNgModule { }
