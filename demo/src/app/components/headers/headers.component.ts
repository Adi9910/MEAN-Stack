import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  template: `<header>
      <h1>
        {{ title }}
        <app-button
          color="blue"
          text="ADD"
          (btnClick)="toggleAddTask()"
        ></app-button>
      </h1>
    </header>
    <body>
      <div style="width:100%;" *ngIf="isVisible">
        <div style="width:40%;float:left;border:solid 1px black;">
          <div>{{ 6589.23 | currency: 'INR' }}</div>
          <div>{{ 6589.23 | currency: 'USD':false }}</div>
          <div>{{ todaydate | date: 'd/MMM/yy,hh/mm' }}</div>
          <div>{{ todaydate | date: 'shortTime' }}</div>
          <div>{{ 454.78787814 | number: '3.4' }}</div>
          <div>{{ jsonval | json }}</div>
          <div>{{ 00.54565 | percent }}</div>
          <div>{{ months | slice: 0:4 }}</div>
        </div>
      </div>
    </body> `,
})
export class HeadersComponent implements OnInit {
  title = 'my-first-app';
  todaydate = new Date();
  isVisible : Boolean = false
  jsonval = { name: 'Aditya', age: '22' };
  months = ['Jan','Feb','Mar','April','May','Jun','July','Aug','Sept','Oct','Nov','Dec']
  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
    this.isVisible = !this.isVisible
  }
}
