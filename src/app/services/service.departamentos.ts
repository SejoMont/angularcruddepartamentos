import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Departamento } from '../models/departamento';

@Injectable()
export class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}
  getDepartamentos(): Observable<any> {
    var request = 'api/departamentos';
    var url = environment.urlApiDepartamentos + request;

    return this._http.get(url);
  }

  create(departamento: Departamento): Observable<any> {
    // debemos convertir el onjeto class departamento a json
    var json = JSON.stringify(departamento);
    // vamos a enviar un objeto json, por lo que debemos indicar
    // en la peticion el formato de dicho objeto(con headers)
    var header = new HttpHeaders().set('content-type', 'application/json');
    
    var request = 'api/departamentos';
    var url = environment.urlApiDepartamentos + request;

    return this._http.post(url, json, { headers: header });
  }

  update(departamento: Departamento): Observable<any>{
    var json = JSON.stringify(departamento);

    var header = new HttpHeaders().set('content-type', 'application/json');
    
    var request = 'api/departamentos';
    var url = environment.urlApiDepartamentos + request;

    return this._http.put(url, json, { headers: header });
  }

  delete(id: string): Observable<any> {
    var request = "api/departamentos/" + id;
    var url = environment.urlApiDepartamentos + request;

    return this._http.delete(url);
  }

}
