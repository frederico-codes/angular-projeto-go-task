import { Component, inject } from '@angular/core';
import { ModalControllService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  private readonly _modalControllerService = inject( ModalControllService)
  
  openEditTaskModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({
      name: 'Nome tarefa',
      description: 'Descrição tarefa'
    })

    dialogRef.closed.subscribe(( taskform ) => {
      console.log('Tarefa alterada: ', taskform)
    })
  }

}
