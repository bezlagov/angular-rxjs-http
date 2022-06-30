import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEnableLesson1: boolean = true;
  isEnableLesson3: boolean = false;
  isEnableLesson4: boolean = true;
  title = 'lesson7';
}
