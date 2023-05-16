import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioJsonService } from '../servicio-json.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})

export class ListaTareasComponent implements OnInit {

  tasks: { name: string, completed: boolean }[] = [];
  newTask: string = '';
  editingTask: string = '';
  editingIndex: number = -1;

  constructor(private servicioJson: ServicioJsonService, private swUpdate: SwUpdate) { }

  // Leer los datos del JSON o Local Storage
  ngOnInit() {
    this.getTasks();
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load new version?')) {
          window.location.reload();
        }
      });
    }
  }

  // Añadir el contenido al JSON o Local Storage
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = ''; // Limpiar el valor de la caja de texto después de agregar la tarea
      
      this.servicioJson.updateDatabase(this.tasks);
    }
  }

  // Intercambiar el valor entre true o false dependiendo si esta marcada o desmarcada
  marcarTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.servicioJson.updateDatabase(this.tasks);
  }

  // Traer datos
  getTasks() {
    this.servicioJson.getDatabase().then((database: { name: string, completed: boolean }[]) => {
      this.tasks = database;
    });
  }

  // Cambiar el valor de editingIndex para que detecte el programa si esta en modo editar o no si no esta en -1
  editTask(index: number) {
    this.editingTask = this.tasks[index].name;
    this.editingIndex = index; // Almacenar el índice de la tarea en edición
  }

  // Eliminar el indice especificado
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.servicioJson.updateDatabase(this.tasks);
  }

  // Cambiar al modo no edicion
  cancelEditTask(index: number) {
    this.editingIndex = -1;
  }

  // Guardar lo editado en el JSON o Local Storage y cambiar al modo no edición
  saveTask(index: number) {
    if (this.editingTask !== '') {
      this.tasks[index].name = this.editingTask; // Obtener la tarea actualizada
      this.editingIndex = -1;
      this.servicioJson.updateDatabase(this.tasks);
    } else {
      this.editingIndex = -1;
    }
  }

}
