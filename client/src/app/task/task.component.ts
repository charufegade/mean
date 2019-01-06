import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public tasks = [
    {
      id: '1',
      name: 'task1',
      dueAt: '12-dec-2018',
      assignedTo: 'John Doe',
      isCompleted: false,
    },
    {
      id: '2',
      name: 'task2',
      dueAt: '14-dec-2018',
      assignedTo: 'Jen Doe',
      isCompleted: true
    }
  ];

  public displayedColumns = ['id', 'name', 'dueAt', 'assignedTo', 'isCompleted', 'actions' ];

  constructor() { }

  ngOnInit() {
  }

}
