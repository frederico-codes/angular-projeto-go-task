import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { WelcomeSectionComponent } from "./components/welcome-section/welcome-section.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, WelcomeSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-go-task';
}
