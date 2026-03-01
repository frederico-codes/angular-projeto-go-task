import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IComment } from '../../interfaces/comment.interface';
import { generateUniqueWithTimestamp } from '../../utils/generate-unique-id-with-timestamp';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.component.html',
  styleUrl: './task-comments-modal.component.css'
})
export class TaskCommentsModalComponent {
  taskCommentsChanged = false
  commentControl = new FormControl('', [Validators.required])

  readonly _task: ITask = inject(DIALOG_DATA)
  readonly _dialogRef: DialogRef<boolean> = inject(DialogRef)

  onAddComment(){
    // criar um comentário
    const newComment: IComment = {
      id:generateUniqueWithTimestamp(),
      description: this.commentControl.value ? this.commentControl.value : ''
    }

    // Adicionar o novo comentário na lista de comentários da tarefa
    this._task.comments.unshift(newComment)

    //reset no formControl
    this.commentControl.reset()

    //atualizar a flag/prop alterações nos comentários
    this.taskCommentsChanged = true
  }

  onCloseModal(){
    this._dialogRef.close(this.taskCommentsChanged)
  }


}
