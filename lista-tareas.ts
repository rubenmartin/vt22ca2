import {
  Component,
  Input,
  Pipe,
  Directive,
  PipeTransform,
  OnInit,
  HostListener
} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

/// Modelo interface

interface Task {
  name: string;
  deadline: Date;
  queued: boolean;
  tareasRequeridas: number;
}

/// Servicio de Datos Locales
class TaskService {
  public taskStore: Task[] = [];

  constructor() {
    const tasks = [
      {
        name: "Preparar guión Videotutorial",
        deadline: "03 Nov 2016",
        tareasRequeridas: 2
      }, {
        name: "Buscar imágenes y videos",
        deadline: "03 Nov 2016",
        tareasRequeridas: 1
      }, {
        name: "Grabación Completa",
        deadline: "04 Nov 2016",
        tareasRequeridas: 2
      }, {
        name: "Edición y Producción",
        deadline: "05 Nov 2016",
        tareasRequeridas: 3
      }
    ];
    }
}

/// Component classes

/// - Main Parent Component

@Component({
  selector: 'lista-tareas',  
  styleUrls: ['lista-tareas.css'],
  templateUrl: 'lista-tareas.html'
})

class TasksComponent {
  today: Date;
  tasks: Task[];
  queuedTareas: number;
  queueHeaderMapping: any = {
    '=0': 'Sin tareas',
    '=1': 'Una tarea',
    'other': '# tareas'
  };
  

  constructor() {
    const taskService: TaskService = new TaskService();
    this.tasks = taskService.taskStore;
    this.today = new Date();    
   }

   toggleTask(task: Task): void {
    task.queued = !task.queued;    
  }

  private actualizarTareasEnCola(): void {
    this.queuedTareas = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((tareas: number, queuedTask: Task) => {
      return tareas + queuedTask.tareasRequeridas;
    }, 0);
  }
};  

bootstrap(TasksComponent);