import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
  </h3>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
