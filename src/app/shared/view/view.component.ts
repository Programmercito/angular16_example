import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  lista: any[] = [];
  registro: any;
  constructor(private route: ActivatedRoute) {
    this.lista = JSON.parse(localStorage.getItem("base") || "[]");
    let nombre = this.route.snapshot.paramMap.get('nombre');
    let resultado = this.lista.filter(objeto => objeto.nombre == nombre);
    this.registro = resultado[0];
    console.log(this.registro);
  }
}
