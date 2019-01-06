import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users = [
    {
      id: '1',
      firstName: 'Unmay',
      lastName: 'Chaudhari',
      updatedAt: '22-12-2018',
      createdAt: '22-03-2018',
    },
    {
      id: '1',
      firstName: 'Kiyansh',
      lastName: 'Chaudhari',
      updatedAt: '22-12-2018',
      createdAt: '22-03-2018'
    }
  ];

  public displayedColumns = [ 'id', 'firstName', 'lastName', 'updatedAt', 'createdAt', 'actions' ];

  constructor() { }

  ngOnInit() {
  }

}
