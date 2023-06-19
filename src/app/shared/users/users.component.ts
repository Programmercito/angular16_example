import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  lista: any[] = [];
  constructor() {
    this.lista = JSON.parse(localStorage.getItem("base") || "[]");
  }
  getEdad(fecha: string) {
    let partes = fecha.split("/");
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let año = parseInt(partes[2]);
    let fechaNacimiento = new Date(año, mes, dia);
    let fechaActual = new Date();
    let diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
    let edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
    return edad;
  }
}
