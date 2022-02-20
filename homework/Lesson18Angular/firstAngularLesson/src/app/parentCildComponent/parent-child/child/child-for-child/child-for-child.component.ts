import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-for-child',
  templateUrl: './child-for-child.component.html',
  styleUrls: ['./child-for-child.component.scss']
})


export class ChildForChildComponent  {

  here: boolean = false;
  
@Output()
public customEvent = new EventEmitter<string>();

clickMe(): void {
  this.customEvent.emit('text from childForChild')
}

  

  constructor() { }

  

}
