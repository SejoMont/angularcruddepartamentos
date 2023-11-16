import { HomeComponent } from "./components/home/home.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";
import { EditdepartamentoComponent } from "./components/editdepartamento/editdepartamento.component";

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "insertar", component: InsertardepartamentoComponent},
    {path: "editar/:id/:nombre/:localidad", component: EditdepartamentoComponent},
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);

