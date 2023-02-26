import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  // styles: ['header.component.css']
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
