import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioJsonService {
  private storage: Storage;
  
  constructor(private http: HttpClient) { 
    this.storage = localStorage;
  }

  public updateDatabase(data: { name: string, completed: boolean }[]) {
    this.http.post('http://localhost:3000/tasks', { tasks: data })
      .subscribe(
        response => {
          const tasksJson = JSON.stringify(data);
          this.storage.setItem('tasks', tasksJson);
          console.log('Tarea agregada correctamente.');
          // Aquí puedes realizar cualquier acción adicional después de agregar la tarea correctamente
        },
        error => {
          const tasksJson = JSON.stringify(data);
          this.storage.setItem('tasks', tasksJson);
        }
      );
  }

  public getDatabase(): Promise<{ name: string, completed: boolean }[]> {
    return new Promise((resolve, reject) => {
      this.http.get<any>('http://localhost:3000/tasks')
        .subscribe(
          response => {
            const tasksJson = this.storage.getItem('tasks');
            const tasksFromStorage = tasksJson ? JSON.parse(tasksJson) : [];

            // Normaliza las cadenas JSON utilizando JSON.parse() y JSON.stringify()
            const normalizedTasksJson = JSON.stringify(tasksFromStorage);
            const normalizedResponseJson = JSON.stringify(response.tasks);

            // Compara las cadenas JSON normalizadas para si el Local Storage contiene información adicional
            if (normalizedTasksJson === normalizedResponseJson) {
              resolve(response.tasks);
            } else { // Si tiene información adicional actualizo el servidor
              this.updateDatabase(tasksFromStorage);
              resolve(tasksFromStorage);
            }
            
          },
          error => {
            const tasksJson = this.storage.getItem('tasks');
            resolve(tasksJson ? JSON.parse(tasksJson) : []);
          }
        );
    })
  }
}
