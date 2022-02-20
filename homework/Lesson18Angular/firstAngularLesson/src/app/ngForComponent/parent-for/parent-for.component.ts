import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-for',
  templateUrl: './parent-for.component.html',
  styleUrls: ['./parent-for.component.scss']
})
export class ParentForComponent {

  lutchiy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

shopping = [
  ['avocado'],
  ['banan'],
  ['coconut'],
  ['mango'],
  ['tomato'],
  ['aple'],
  ['milk'],
  ['meat'],
  ['fish'],
  ['flower']
]

  showBold: boolean = false;
  refreshColor= '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  // refreshColor = false;
  underline: boolean = false;
  // function onClick() {
//   const div = document.createElement("div");
//   div.classList.add("box");
//   div.style = "background-color: " +
//     '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
//     ;
//   document.getElementById("container").appendChild(div);
// }

// document.querySelector("button").addEventListener("click", onClick);

// for (let i = 5; i > 0; i--) onClick();

  constructor() { }

}
