import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Enrollment } from '../../../public/interfaces/enrollment.interface';
import { InscriptionService } from '../../../public/services/inscription.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-manage-enrollments',
  standalone: true,
  imports: [
    MatPaginator,
    MatTable,
    MatSort,
    MatTableModule,
    CurrencyPipe 
  ],
  templateUrl: './manage-enrollments.component.html',
  styleUrl: './manage-enrollments.component.css'
})
export class ManageEnrollmentsComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  listEnrollments: Enrollment[] = [];

  dataSource: any;
  sortedData: Enrollment[] = [];

  columnas: string[] =[
    'Identificacion', 
    'Nombre', 
    'Pais', 
    'Departamento',
    'Ciudad', 
    'Financiación',
    'Ver',
  ];

  constructor(
    private _inscriptionService: InscriptionService,
    private _liveAnnouncer: LiveAnnouncer,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.getInscripciones();
  }

  
  getInscripciones() {
    this._inscriptionService.getEnrollment().subscribe(
      data => {
        this.listEnrollments = data;
        this.dataSource = new MatTableDataSource(this.listEnrollments);
        this.dataSource.paginator = this.paginator;

        this.sortedData = this.listEnrollments.slice();
        this.dataSource.sort = this.sort;

      }, error => {
        console.log(error);
      }
    );
  }

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  sortData(sort: any) {
    const data = this.listEnrollments.slice();
    if (!sort.active || sort.direction === '') {       
      return;
    } 

     this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case "Identificacion":
          return this.compare(a.identificationNumber, b.identificationNumber, isAsc);
        case "Nombre":
          return this.compare(a.name, b.name, isAsc);
        case "Pais":
          return this.compare(a.country, b.country, isAsc);
        case "Departamento":
          return this.compare(a.department, b.department, isAsc);
        case "Ciudad":
          return this.compare(a.city, b.city, isAsc);
        case "Financiación":
          return this.compare(a.totalGlobalUDS, b.totalGlobalUDS, isAsc);
        default:
          return 0;
      }
    }); 
    this.dataSource = new MatTableDataSource<Enrollment>(this.sortedData);
    this.dataSource.paginator=this.paginator;
  }

  compare(a: Number | Date | string, b: Number | Date | string, isAsc: boolean)
  {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  } 

  ver( id: string){
    this.route.navigate(['/admin/manageEnrollments/'+id]);
  }
}
