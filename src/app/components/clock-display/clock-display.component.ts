import { Component, OnInit } from '@angular/core';
import { ClockServiceService } from 'src/app/services/clock-service.service';

@Component({
  selector: 'app-clock-display',
  templateUrl: './clock-display.component.html',
  styleUrls: ['./clock-display.component.scss']
})
export class ClockDisplayComponent implements OnInit {

  constructor(private clockService: ClockServiceService) { }

  ngOnInit(): void {
    this.clockService.timeSubject.subscribe(this.clockObserver);
  }

  localTimeInMs = 0;

  clockObserver = {
    next: (v: number) => { this.localTimeInMs = v },
    error: (err: any) => { },
  }
}
