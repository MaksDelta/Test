import { Component,} from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent {

  TestMethodIn(value: string): void {
    console.log(value)
  }

  constructor() { }


}
