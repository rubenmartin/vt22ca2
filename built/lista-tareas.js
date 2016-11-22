System.register(['@angular/core', '@angular/platform-browser-dynamic'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_dynamic_1;
    var TaskService, TasksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            /// Servicio de Datos Locales
            TaskService = (function () {
                function TaskService() {
                    this.taskStore = [];
                    this.taskStore = [
                        {
                            name: "Preparar guión Videotutorial",
                            deadline: new Date("03 Nov 2016"),
                            queued: false,
                            tareasRequeridas: 2
                        }, {
                            name: "Buscar imágenes y videos",
                            deadline: new Date("03 Nov 2016"),
                            queued: false,
                            tareasRequeridas: 1
                        }, {
                            name: "Grabación Completa",
                            deadline: new Date("04 Nov 2016"),
                            queued: false,
                            tareasRequeridas: 2
                        }, {
                            name: "Edición y Producción",
                            deadline: new Date("05 Nov 2016"),
                            queued: false,
                            tareasRequeridas: 3
                        }
                    ];
                }
                return TaskService;
            }());
            /// Component classes
            /// - Main Parent Component
            TasksComponent = (function () {
                function TasksComponent() {
                    this.queueHeaderMapping = {
                        '=0': 'Sin tareas',
                        '=1': 'Una tarea',
                        'other': '# tareas'
                    };
                    var taskService = new TaskService();
                    this.tasks = taskService.taskStore;
                    this.today = new Date();
                }
                TasksComponent.prototype.toggleTask = function (task) {
                    task.queued = !task.queued;
                };
                TasksComponent.prototype.actualizarTareasEnCola = function () {
                    this.queuedTareas = this.tasks
                        .filter(function (task) { return task.queued; })
                        .reduce(function (tareas, queuedTask) {
                        return tareas + queuedTask.tareasRequeridas;
                    }, 0);
                };
                TasksComponent = __decorate([
                    core_1.Component({
                        selector: 'lista-tareas',
                        styleUrls: ['lista-tareas.css'],
                        templateUrl: 'lista-tareas.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TasksComponent);
                return TasksComponent;
            }());
            ;
            platform_browser_dynamic_1.bootstrap(TasksComponent);
        }
    }
});
