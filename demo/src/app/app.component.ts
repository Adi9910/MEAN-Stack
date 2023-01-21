import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="main">MAGIC TABLE
    <app-headers></app-headers>
    <app-tasks></app-tasks>
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
