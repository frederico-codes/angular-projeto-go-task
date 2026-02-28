import { Component, inject, Input } from '@angular/core';
import { ModalControllService } from '../../services/modal-controller.service';
import { ITask } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input({ required:true }) task! : ITask

  private readonly _taskService = inject(TaskService)
  private readonly _modalControllerService = inject( ModalControllService)

  openEditTaskModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({
      name: this.task.name,
      description: this.task.description
    })

    dialogRef.closed.subscribe(( taskform ) => {
     if(taskform){
      this._taskService.updateTaskNameAndDescription(
        this.task.id,
        this.task.status,
        taskform.name,
        taskform.description
      )
     }
    })
  }

}
