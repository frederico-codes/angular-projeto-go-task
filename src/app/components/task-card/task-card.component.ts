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
    this._modalControllerService.openEditTaskModal()
  }

}
