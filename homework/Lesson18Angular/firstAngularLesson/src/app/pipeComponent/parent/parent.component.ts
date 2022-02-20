import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

varDate = new Date;
varString = 'MaksOfTheBest';
pi = Math.PI;
myNumber = 23;
object = {
  name: 'Maks',
  lastname: 'Delta',
  adress: {
    str: 'Maloholoskivska',
  }
}

  constructor() { }
}
