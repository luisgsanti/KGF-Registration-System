import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
//pages
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { PriceCodeComponent } from './pages/price-code/price-code.component';

const routes: Routes = [
  {
    path: '',
      component: HomeLayoutComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'inscription', component: InscriptionComponent },
        { path: 'price-code', component: PriceCodeComponent },

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
