import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule} from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatStepperModule,
    MatListModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
    
  ]
})
export class MaterialModule { }
