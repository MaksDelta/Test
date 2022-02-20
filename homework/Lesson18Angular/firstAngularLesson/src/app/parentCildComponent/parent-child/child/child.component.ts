import { Component,  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  
  TestMethod(value: string): void{
    console.log(value)
    console.log('text from child')
  }

  constructor() { }


}
