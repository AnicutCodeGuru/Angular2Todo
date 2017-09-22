import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SampleComponent }  from './app.sample1';
import { Counter }  from './app.Counter';

import {TaskList}  from './todo/todo.TaskList';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , SampleComponent,Counter,TaskList],
  bootstrap:    [ AppComponent,SampleComponent,TaskList ]
})
export class AppModule { }
