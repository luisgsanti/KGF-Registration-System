import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Enrollment } from '../interfaces/enrollment.interface';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = `${environment.endpoint}api/enrollment`;
  }

  getEnrollment(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.myAppUrl}`)
  }

  getEnrollmentById(id: number): Observable<Enrollment> {
    return this.http.get<Enrollment>(`${this.myAppUrl}/id/${id}`);
  }

  registerEnrollment(formData: FormData): Observable<Enrollment> {
    return this.http.post<Enrollment>(this.myAppUrl, formData);
  }

  deleteEnrollment(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.myAppUrl}/${id}`);
  }

  updateEnrollment(id: number , formData: FormData): Observable<boolean> {
    return this.http.put<boolean>(`${this.myAppUrl}/${id}`, formData);
  }
}
