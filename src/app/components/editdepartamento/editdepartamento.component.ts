import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdepartamento',
  templateUrl: './editdepartamento.component.html',
  styleUrls: ['./editdepartamento.component.css'],
})
export class EditdepartamentoComponent implements OnInit {
  public departamento!: Departamento;
  @ViewChild("cajaid") cajaIdRef !: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef !: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidadRef !: ElementRef;

  constructor(
    private _serviceDepartamentos: ServiceDepartamentos,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var id = parseInt(parametros['id']);
      this.departamento = new Departamento(
        id,
        parametros['nombre'],
        parametros['localidad']
      );
    });
  }

  updateDepartamento(): void {
    var nombre = this.cajaNombreRef.nativeElement.value;
    var localidad = this.cajaLocalidadRef.nativeElement.value;
    // modificamos el objeto departamento de la clase que es el objeto que vamos a enviar
    this.departamento.nombre = nombre;
    this.departamento.localidad = localidad;
    this._serviceDepartamentos.update(this.departamento).subscribe(response => {
      this._router.navigate(['/']);
    })
  }
}
