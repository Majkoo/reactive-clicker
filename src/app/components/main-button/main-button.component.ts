import { Component, OnInit } from '@angular/core';
import { ClickServiceService } from 'src/app/services/click-service.service';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit {

  constructor(private clickService: ClickServiceService) { }

  ngOnInit(): void {
    this.clickService.clickSubject.subscribe(this.clickService.clickObserver);
  }
  onClick(): void {
    this.clickService.clickSubject.next(this.clickService.clickCount);
  }

}
