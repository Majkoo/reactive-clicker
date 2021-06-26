import { Component, OnInit } from '@angular/core';
import { ClickServiceService } from 'src/app/services/click-service.service';

@Component({
  selector: 'app-click-cnt-display',
  templateUrl: './click-cnt-display.component.html',
  styleUrls: ['./click-cnt-display.component.scss']
})
export class ClickCntDisplayComponent implements OnInit {

  localClickCount: number;

  constructor(private clickService: ClickServiceService) {
    this.localClickCount = 0;
  }

  ngOnInit(): void {
    this.clickService.clickSubject.subscribe({
      next: (v: number) => { 
        this.localClickCount = this.clickService.clickCount;
      },
    });
  }

}
