import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  template: `<header>
  <h1>{{ title }} <app-button color="red" text="ADD" (btnClick)="toggleAddTask()"></app-button></h1>
</header>
`,
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnInit {
  title = 'aditya';
  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
  }
}