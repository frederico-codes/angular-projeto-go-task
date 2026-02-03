import { Component, inject } from '@angular/core';
import { ModalControllService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css'
})
export class WelcomeSectionComponent {
  private readonly _modalControllerService = inject( ModalControllService)

  openNewTaskModal(){
    const dialogRef = this._modalControllerService.openNewTaskModal()

    dialogRef.closed.subscribe(( taskForm ) => {
      console.log('Tarefa criada: ', taskForm)
    })
  }
}



