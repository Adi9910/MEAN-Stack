import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  template: `<p *ngFor="let task of tasks">{{ task.text }}</p> `,
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor() {}

  ngOnInit(): void {}
}
