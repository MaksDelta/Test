import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() title = '';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter();

  handleClick() {
    this.clicked.emit();
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.disabled);
  }
}
