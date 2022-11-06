import { Component, Input, OnInit } from '@angular/core';
import { item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  value = '';
  value1 = '';
  newValue: string = '';
  @Input() items: item[] = [
    { name: 'One', val: 1 },
    { name: 'Two', val: 2 },
    { name: 'Three', val: 3 },
    { name: 'Four', val: 3 },
    { name: 'Five', val: 3 },
  ];
  selectedValue1: string = 'One';
  selectedValue2: string = 'One';
  selectedValue3: string = 'One';
  selectedValue4: string = 'One';

  constructor() {}
  ngOnInit(): void {}
}
