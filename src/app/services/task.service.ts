import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { ITask } from "../interfaces/task.interface";
import { ITaskFormControls } from "../interfaces/task-form-controls.interface";
import { TaskStatusEnum } from "../enums/task-status.enum";
import { generateUniqueWithTimestamp } from "../utils/generate-unique-id-with-timestamp";



@Injectable({
  providedIn: 'root',
})

export class TaskService{
  // Tarefas A fazer
  private todoTasks$ = new BehaviorSubject<ITask[]>([])
  readonly todoTasks = this.todoTasks$
  .asObservable()
  .pipe(map((tasks) => structuredClone(tasks)))

  // Tarefas em Fazendo
  private doingTasks$ = new BehaviorSubject<ITask[]>([])
  readonly doingTasks = this.doingTasks$
  .asObservable()
  .pipe(map((tasks) => structuredClone(tasks)))

  // Tarefas em Concluído
  private doneTasks$ = new BehaviorSubject<ITask[]>([])
  readonly doneTasks = this.doneTasks$
  .asObservable()
  .pipe(map((tasks) => structuredClone(tasks)))

  addTask(taskInfos: ITaskFormControls) {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: generateUniqueWithTimestamp(),
      comments: []
    }

    const currentList = this.todoTasks$.value

    this.todoTasks$.next([ ...currentList, newTask ])
  }

  carregarListaAtualDeTodos(){
    console.log('Lista atual TODOS: ', this.todoTasks$.value)
  }
}
