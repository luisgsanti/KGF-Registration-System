import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  constructor(private emailService: EmailService, private toastr: ToastrService, ) { }

  /**ENVIAR CORREO ELECTRONICOS */
  onSubmit(form: NgForm) {
    if (form.valid) { // Verifica si el formulario es válido antes de enviar
        this.emailService.sendEmail(form.value)
        .then((response) => {
          console.log('Correo enviado:', response);
          this.toastr.success('Correo enviado con éxito!', 'Enviado al administrador!' );
          form.resetForm(); // Limpia los campos
        })
        .catch((error) => {
          console.error('Error al enviar el correo:', error);
          this.toastr.error('Error al enviar el correo. Estamos reparando el sistema', 'Error');
        });

    }else {
      this.toastr.warning('Todos los campos son obligatorios', 'Recomendación');
    }
  }

}
