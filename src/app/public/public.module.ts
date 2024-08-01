
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//pages
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

//router
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeComponent,
    InscriptionComponent,
  ]
})
export class PublicModule { }
