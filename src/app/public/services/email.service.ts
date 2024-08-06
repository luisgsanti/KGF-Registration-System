import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly service_id = 'service_n3eglnd'; // Reemplaza con tu ID de servicio de EmailJS
  private readonly template_id = 'template_j1hi6c7'; // Reemplaza con tu ID de plantilla de EmailJS
  private readonly userId = 'PSrmLVsWKo4pVPrQx'; // Reemplaza con tu User ID de EmailJS

  constructor() {
    emailjs.init(this.userId);
  }

  sendEmail(data: any) {
    const emailParams = {
      to_name: 'Portafolio HCS', // Nombre del destinatario (puedes dejarlo en blanco si no lo necesitas)
      from_name: data.name, // Nombre del remitente (se obtiene desde el formulario)
      message: data.message, // Mensaje (se obtiene desde el formulario)
      reply_to: data.email, // Dirección de correo del remitente (se obtiene desde el formulario)
    };

    return emailjs.send(this.service_id, this.template_id, emailParams);
  }
}