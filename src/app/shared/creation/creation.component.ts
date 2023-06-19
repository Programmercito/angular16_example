import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {

  @ViewChild("nombre") nombre?: ElementRef;
  @ViewChild("fecha") fecha?: ElementRef;
  @ViewChild("celular") celular?: ElementRef;
  @ViewChild("fijo") fijo?: ElementRef;
  @ViewChild("direccion") direccion?: ElementRef;
  lista: any[] = [];
  public agregar() {
    let objeto = { nombre: this.nombre?.nativeElement.value, fecha: this.fecha?.nativeElement.value, celular: this.celular?.nativeElement.value, fijo: this.fijo?.nativeElement.value, direccion: this.direccion?.nativeElement.value };
    this.lista?.push(objeto);
    localStorage.setItem('base', JSON.stringify(this.lista));


    alert("agregado");
  }

}
