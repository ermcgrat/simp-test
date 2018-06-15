import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SdGridModule } from 'sd-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SdGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
