import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  second: number = 0;
  minute: number = 0;
  timer;

  constructor() { }
  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.timer?.unsubscribe();
  }

  onClear() {
    this.second = 0;
    this.minute = 0;
  }

  onStart() {
    this.onStop();
    this.timer = interval(1000).subscribe(value => {
      ++this.second;
      if (this.second >= 60) {
        this.minute++;
        this.second = 0;
      }
    });
  }

  onStop() {
    this.timer?.unsubscribe();
  }
}
