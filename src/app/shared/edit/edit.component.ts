import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @ViewChild("fecha") fecha?: ElementRef;
  @ViewChild("celular") celular?: ElementRef;
  @ViewChild("fijo") fijo?: ElementRef;
  @ViewChild("direccion") direccion?: ElementRef;
  lista: any[] = [];
  registro: any;
  constructor(private route: ActivatedRoute) {
    this.lista = JSON.parse(localStorage.getItem("base") || "[]");
    let nombre = this.route.snapshot.paramMap.get('nombre');
    let resultado = this.lista.filter(objeto => objeto.nombre == nombre);
    this.registro = resultado[0];
    console.log(this.registro);
  }
  public guardar() {
    let nombre = this.route.snapshot.paramMap.get('nombre');
    let indice = this.lista.findIndex (objeto => objeto.nombre == nombre);
    let objeto = { nombre: nombre, fecha: this.fecha?.nativeElement.value, celular: this.celular?.nativeElement.value, fijo: this.fijo?.nativeElement.value, direccion: this.direccion?.nativeElement.value };
    this.lista[indice]=objeto;
    localStorage.setItem('base', JSON.stringify(this.lista));
    alert("modificado");
  }
}
