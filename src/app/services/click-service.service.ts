import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickServiceService {

  cpsSubject = new Subject<string>();
  clickSubject = new Subject<number>();
  clickCount: number;


  constructor() {
    this.clickCount = 0;
  }

}
