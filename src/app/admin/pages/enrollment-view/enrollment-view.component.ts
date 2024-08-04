import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscriptionService } from '../../../public/services/inscription.service';
import { Enrollment } from '../../../public/interfaces/enrollment.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-view',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './enrollment-view.component.html',
  styleUrl: './enrollment-view.component.css'
})
export class EnrollmentViewComponent implements OnInit{

  id : number;
  enrollment!: Enrollment;

  ngOnInit(): void {
    this.getEnrollment();

  }

  constructor(
    private aRoute: ActivatedRoute,
    private _enrollmentService: InscriptionService,


  ){
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  getEnrollment(){
    this._enrollmentService.getEnrollmentById(this.id).subscribe(data=>{
      this.enrollment = data;
    })
  }

  
}
