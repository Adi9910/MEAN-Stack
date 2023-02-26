import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button 
  class="btn" 
  [ngStyle]="{ 'background-color': color }" 
  (click)="onClick()">
  {{ text }}CLick me
</button>
`
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
