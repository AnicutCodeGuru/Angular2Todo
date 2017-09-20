import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SampleComponent }  from './app.sample1';
import { Counter }  from './app.Counter';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , SampleComponent,Counter],
  bootstrap:    [ AppComponent,SampleComponent ]
})
export class AppModule { }
