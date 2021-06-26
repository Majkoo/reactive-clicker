import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockServiceService {

  timeInMs: number;
  timeSubject = new Subject<number>();

  constructor() {
    this.timeInMs = 0;
    this.timeSubject.subscribe(this.clockObserver);
    this.timeSubject.next(1000);
    setInterval( () => this.timeSubject.next(this.timeInMs), 1000 );
  }

  clockObserver = {
    next: (v: number) => { this.timeInMs += 1000; },
    error: (err: any) => { 'Observer got an error: ' + err; },
  }
}
