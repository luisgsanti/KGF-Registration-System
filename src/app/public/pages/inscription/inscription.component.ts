import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Enrollment } from '../../interfaces/enrollment.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { InscriptionService } from '../../services/inscription.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
  ],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private inscriptionService: InscriptionService,
  ) {

    
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
  prevTotal = 0;

  
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

  /*filesPdf: File | null = null;*/
  filesPdf: any = [];
  documentosPdf: any = [];

  registrarEnrollment() {
    const formData = new FormData();
    const formValues = this.registerForm.value;

    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        const value = formValues[key];
        formData.append(key, value);
      }
    }

    formData.append("routeDocIdentification", this.filesPdf[0]);
    formData.append("routeDocBankCertificate", this.filesPdf[1]);
    formData.append("routeDocDebt", this.filesPdf[2]);
    formData.append("routeDocHome", this.filesPdf[3]);
    formData.append("routeDocFurniture", this.filesPdf[4]);
    formData.append("routeDocVehicle", this.filesPdf[5]);
    formData.append("routeDocVenture", this.filesPdf[6]);

    formData.forEach((value, key) => {
      if (value instanceof File) {
        console.log()
          console.log(`${key}:`);
          console.log(`  File name: ${value.name}`);
          console.log(`  File type: ${value.type}`);
          console.log(`  File size: ${value.size} bytes`);
      } else {
          console.log(`${key}: ${value}`);
      }
    });

    this.inscriptionService.registerEnrollment(formData)
      .subscribe(() => {
          console.log("Si la Guarda");
        },(error) => {
          console.error("Error al guardar:", error);
      }
    );


  }

  capturarArchivoPdf(event: any,  posicionArchivo: number) {
    try {
      const documentoCapturadoPdf = event.target.files[0];
      const maxFileSize = 5200000;
      const extensionesValidas = ['pdf'];
      const extension = documentoCapturadoPdf.name.split('.').pop()?.toLowerCase();

      if (extension && extensionesValidas.includes(extension) && documentoCapturadoPdf.size <= maxFileSize) {
        this.filesPdf[posicionArchivo] = documentoCapturadoPdf;
        this.extraerBase64(documentoCapturadoPdf).then((res: any) => {
          this.documentosPdf[posicionArchivo] = res.base;
        });
      }else{
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      resolve({
        base: null
      });
    }
  });
}




