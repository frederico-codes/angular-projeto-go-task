import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { WelcomeSectionComponent } from "./components/welcome-section/welcome-section.component";
import { TaskListSectionComponent } from "./components/task-list-section/task-list-section.component";
import { TaskFormModalComponent } from "./components/task-form-modal/task-form-modal.component";
import { TaskCommentsModalComponent } from "./components/task-comments-modal/task-comments-modal.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    WelcomeSectionComponent,
    TaskListSectionComponent,
    TaskFormModalComponent,
    TaskCommentsModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-go-task';
}
