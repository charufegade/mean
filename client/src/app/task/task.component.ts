import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public tasks = [];

  public displayedColumns = ['id', 'name', 'dueAt', 'assignedTo', 'isCompleted', 'actions'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/tasks').subscribe((res: any[]) => {
      this.tasks = res;
    });
  }

}
