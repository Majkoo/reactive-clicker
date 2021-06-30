import { Component, OnInit } from '@angular/core';
import { ClickServiceService } from 'src/app/services/click-service.service';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit {

  constructor(private clickService: ClickServiceService) { }
  cpsMeter = false;

  ngOnInit(): void {

    this.clickService.clickSubject.subscribe({
      next: (v: number) => { this.clickService.clickCount++; },
      error: (err: any) => console.error('Observer got an error: ' + err),
    });

    this.clickService.cpsSubject.subscribe({
      next: (v) => { if(v === 'ready') {this.cpsMeter = true} } 
    })
  }
  onClick(): void {
    this.clickService.clickSubject.next(this.clickService.clickCount);
    if (this.cpsMeter) { this.clickService.cpsSubject.next('ongoing'); console.log('cpsMeter is ongoing'); }
  }

}
