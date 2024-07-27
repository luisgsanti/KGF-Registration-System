import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Enrollment } from '../../interfaces/enrollment.interface';


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    PrimeNgModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule, 
    
  ],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private _formBuilder: FormBuilder) {

    this.registerForm = this._formBuilder.group({
      identificationNumber:['', Validators.required],
      name: ['', Validators.required],
      email:['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required],
      municipality: ['', Validators.required],
      bankAccount: ['', Validators.required],
      accountType: ['', Validators.required],
      bondType: ['', Validators.required],
      bondCode: ['', Validators.required],

      routeDocIdentification: ['', Validators.required],
      routeDocBankCertificate: ['', Validators.required],

      totalDebt: ['', Validators.required],
      routeDocDebt: ['', Validators.required],

      totalUpcomingAssets: ['', Validators.required],
      routeDocHome: ['', Validators.required],
      routeDocFurniture: ['', Validators.required],
      routeDocVehicle: ['', Validators.required],

      totalVenture: ['', Validators.required],
      routeDocVenture: ['', Validators.required],

    });

  }

  isLinear = false;

  construirEnrollment(): Enrollment{

    const enrollment: Enrollment = {
      identificationNumber: this.registerForm.get('identificationNumber')?.value.toUpperCase(),
      name: this.registerForm.get('name')?.value.toUpperCase(),
      email: this.registerForm.get('email')?.value.toUpperCase(),
      phone: this.registerForm.get('phone')?.value.toUpperCase(),
      address: this.registerForm.get('address')?.value.toUpperCase(),
      country: this.registerForm.get('country')?.value.toUpperCase(),
      department: this.registerForm.get('department')?.value.toUpperCase(),
      city: this.registerForm.get('city')?.value.toUpperCase(),
      municipality: this.registerForm.get('municipality')?.value.toUpperCase(),
      bankAccount: this.registerForm.get('bankAccount')?.value.toUpperCase(),
      accountType: this.registerForm.get('accountType')?.value.toUpperCase(),
      bondType: this.registerForm.get('bondType')?.value.toUpperCase(),
      bondCode: this.registerForm.get('bondCode')?.value.toUpperCase(),

      routeDocIdentification: this.registerForm.get('routeDocIdentification')?.value.toUpperCase(),
      routeDocBankCertificate: this.registerForm.get('routeDocBankCertificate')?.value.toUpperCase(),

      totalDebt: this.registerForm.get('totalDebt')?.value.toUpperCase(),
      routeDocDebt: this.registerForm.get('routeDocDebt')?.value.toUpperCase(),

      totalUpcomingAssets: this.registerForm.get('totalUpcomingAssets')?.value.toUpperCase(),
      routeDocHome: this.registerForm.get('routeDocHome')?.value.toUpperCase(),
      routeDocFurniture: this.registerForm.get('routeDocFurniture')?.value.toUpperCase(),
      routeDocVehicle: this.registerForm.get('routeDocVehicle')?.value.toUpperCase(),

      totalVenture: this.registerForm.get('totalVenture')?.value.toUpperCase(),
      routeDocVenture: this.registerForm.get('routeDocVenture')?.value.toUpperCase(),
    }
    return enrollment;
  }

  registerForm: FormGroup;

  registrarEnrollment(){
    const enrollment = this.construirEnrollment();

    console.log(enrollment);
  }


}
