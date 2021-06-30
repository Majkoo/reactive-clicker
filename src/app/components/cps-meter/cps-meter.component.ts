import { Component, OnInit } from '@angular/core';
import { ClickServiceService } from 'src/app/services/click-service.service';

@Component({
  selector: 'app-cps-meter',
  templateUrl: './cps-meter.component.html',
  styleUrls: ['./cps-meter.component.scss']
})
export class CpsMeterComponent implements OnInit {
  constructor(private clickService: ClickServiceService) { }
  secondsPassed = 0;
  clicks = 0;
  cps = 0;

  ngOnInit(): void {
    
    setInterval(() => { 
      this.secondsPassed += 0.05;
    }, 50);
    setInterval(() => {
      this.secondsPassed = 0;
      this.clicks = 0;
    }, 10000)

    this.clickService.clickSubject.subscribe({
      next: () => {
        this.clicks++;
        if (this.clicks && this.secondsPassed >= 1.5) { this.cps = this.clicks/this.secondsPassed } ;
      },
      error: (err) => { console.log(err) },
    })
  }

}
