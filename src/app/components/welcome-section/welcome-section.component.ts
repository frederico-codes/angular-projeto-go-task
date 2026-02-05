import { Component, inject } from '@angular/core';
import { ModalControllService } from '../../services/modal-controller.service';
import { generateUniqueWithTimestamp } from '../../utils/generate-unique-id-with-timestamp';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css'
})
export class WelcomeSectionComponent {
  private readonly _modalControllerService = inject( ModalControllService)
  private readonly _taskService = inject(TaskService)

  constructor() {
    console.log(generateUniqueWithTimestamp())
  }

  openNewTaskModal(){
    const dialogRef = this._modalControllerService.openNewTaskModal()

    dialogRef.closed.subscribe(( taskForm ) => {
      console.log('Tarefa criada: ', taskForm)
      if(taskForm){
        this._taskService.addTask(taskForm)
      }
    })
  }
}



