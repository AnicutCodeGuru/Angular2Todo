import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Sample Component : {{msg}}</h1>`,
})


export class SampleComponent  { 
  msg:string="This is a new component";
} 
