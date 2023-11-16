import { Component, ElementRef, ViewChild } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import {Router} from '@angular/router'

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css']
})
export class InsertardepartamentoComponent {
  @ViewChild("cajaid") cajaIdRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidadRef!: ElementRef;

  constructor(
    private _serviceDepartamentos: ServiceDepartamentos,
    private _router: Router
  ){}

  InsertarDepartamento(): void{
    var num = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var loc = this.cajaLocalidadRef.nativeElement.value;

    var newDept = new Departamento(num, nom, loc);

    this._serviceDepartamentos.create(newDept).subscribe(response => {
      this._router.navigate(["/"]);
    })
  }
}
