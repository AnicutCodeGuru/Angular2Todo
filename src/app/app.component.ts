import { Component } from '@angular/core';
import { Counter }  from './app.Counter';

@Component({
  selector: 'app',
  template: `<div>
                <counter></counter>
                <counter></counter>
                <counter></counter>
             </div>
            <h1>Hello {{name}} {{msg}}</h1>`,
})


export class AppComponent  { 
  name = 'Angular';
  msg:String="Hello World!";
}
