import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
