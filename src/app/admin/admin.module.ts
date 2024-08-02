import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [],
  imports: [
    ToastrModule.forRoot(),
    AdminRoutingModule,
  ]
})
export class AdminModule { }
