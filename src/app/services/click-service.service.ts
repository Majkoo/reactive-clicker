import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickServiceService {

  clickSubject = new Subject<number>();
  clickCount: number;

  constructor() {
    this.clickCount = 0;
  }

  clickObserver = {
    next: (v: number) => { this.clickCount++; },
    error: (err: any) => console.error('Observer got an error: ' + err),
  };
}
