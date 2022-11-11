import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <app-headers></app-headers>
    <app-tasks></app-tasks>
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
