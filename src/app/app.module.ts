import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ClickCntDisplayComponent } from './components/click-cnt-display/click-cnt-display.component';
import { ClockDisplayComponent } from './components/clock-display/clock-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainButtonComponent,
    ClickCntDisplayComponent,
    ClockDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
