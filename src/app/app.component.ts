import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('accessibilityBar') accessibilityBar: ElementRef | undefined;

  title = 'KGF_RegistrationSystem';
  isAccessibilityActive = false;
  
  cambiarContexto() {
    this.isAccessibilityActive = !this.isAccessibilityActive;

    var html = document.getElementsByTagName("html")[0];
    if (html.className == 'modo_oscuro-govco') {
      html.classList.remove("modo_oscuro-govco");
    } else {
      html.classList.add("modo_oscuro-govco");
    }

    if (this.isAccessibilityActive) {
      this.accessibilityBar?.nativeElement.focus(); // Enfoca el botón después de hacer clic
    }
  }

  aumentarTamanio() {
    var html = document.getElementsByTagName("html")[0];
    var btnsAccesibilidad = this.accessibilityBar?.nativeElement;

    var tamanio = this.tamanioElemento(html);

    // Establece un límite superior para el tamaño de fuente
    if (tamanio < 20) { // Cambia 20 al límite superior deseado
      html.style.fontSize = (tamanio + 1) + 'px';
    }

    btnsAccesibilidad.style.fontSize = '';
  }

  disminuirTamanio() {
    var html = document.getElementsByTagName("html")[0];
    var btnsAccesibilidad = this.accessibilityBar?.nativeElement;

    var tamanio = this.tamanioElemento(html);

    // Establece un límite inferior para el tamaño de fuente
    if (tamanio > 10) { // Cambia 10 al límite inferior deseado
      html.style.fontSize = (tamanio - 1) + 'px';
    }

    btnsAccesibilidad.style.fontSize = '';
  }

  tamanioElemento(element: HTMLElement) {
    const tamanioParrafo = window.getComputedStyle(element, null).getPropertyValue('font-size');
    return parseFloat(tamanioParrafo);
  }
}